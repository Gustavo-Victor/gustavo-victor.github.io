import { HERO_CONTENT } from "../data/info";
import profilePicture from "../assets/profile-photo.jpeg";
import { motion } from "framer-motion";

const container = (delay: number) => ({
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay
        }
    }
})

export default function Hero() {
    return (
        <section id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial={"hidden"}
                            animate={"visible"}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center lg:text-start"
                            children={"Gustavo Victor"} />
                        <motion.span
                            variants={container(0.5)}
                            initial={"hidden"}
                            animate={"visible"}
                            children={"Desenvolvedor Freelancer"}
                            className="bg-gradient-to-r from-blue-900 via-slate-500 to-sky-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent text-center lg:text-start" />
                        <motion.p
                            variants={container(1)}
                            initial={"hidden"}
                            animate={"visible"}
                            children={HERO_CONTENT}
                            className="my-2 max-w-xl py-6 font-tight tracking-tighter text-center lg:text-start" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            style={{ maxWidth: "400px" }}
                            src={profilePicture}
                            alt="profile-picture"
                            className="rounded-lg"
                             />
                    </div>
                </div>
            </div>
        </section>
    )
}
