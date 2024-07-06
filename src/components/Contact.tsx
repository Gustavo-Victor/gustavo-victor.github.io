import { CONTACT } from "../data/info";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6"; 


export default function Contact() {
  return (
    <footer id="contact" className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Entre em contato</h2>
        <div className="text-center tracking-tighter flex flex-col items-center justify-center gap-4">
            <p className="flex gap-4 items-center flex-wrap justify-center lg:justify-start text-sm lg:text-lg">
                <FaLocationDot className="hover:text-white"/>
                {CONTACT.address}
            </p>
            <p className="flex gap-4 items-center flex-wrap justify-center lg:justify-start text-sm lg:text-lg">
                <FaPhone className="hover:text-white" />
                {CONTACT.phoneNo}
            </p>
            <p className="flex gap-4 items-center flex-wrap justify-center lg:justify-start text-sm lg:text-lg">
                <FaEnvelope className="hover:text-white" />
                {CONTACT.email}
            </p>
        </div>
    </footer>
  )
}
