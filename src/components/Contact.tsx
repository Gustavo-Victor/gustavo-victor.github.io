import { CONTACT } from "../data/info";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";


export default function Contact() {
    return (
        <footer id="contact" className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">
                Entre em contato
            </motion.h2>
            <div className="text-center tracking-tighter flex flex-col items-center justify-center gap-4">
                <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex gap-4 items-center flex-wrap justify-center lg:justify-start text-sm lg:text-lg">
                    <FaLocationDot className="hover:text-white" />
                    {CONTACT.address}
                </motion.p>
                <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex gap-4 items-center flex-wrap justify-center lg:justify-start text-sm lg:text-lg">
                    <FaPhone className="hover:text-white" />
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex gap-4 items-center flex-wrap justify-center lg:justify-start text-sm lg:text-lg">
                    <FaEnvelope className="hover:text-white" />
                    {CONTACT.email}
                </motion.p>
            </div>
        </footer>
    )
}
