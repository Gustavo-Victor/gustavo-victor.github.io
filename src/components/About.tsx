import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../data/info";
import { motion } from "framer-motion";


export default function About() {
    return (
        <section id="about" className="border-b border-neutral-900 pb-4 ">
            <h2 className="my-20 text-4xl text-center">
                Sobre
                <span className="text-neutral-500"> Mim</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100, }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img
                            className="rounded-2xl"
                            src={aboutImage}
                            alt="about-image" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{x: 0, opacity: 1}}
                    initial={{x: 100, opacity: 0}}
                    transition={{duration: 0.5}} 
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
