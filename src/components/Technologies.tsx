import {
    RiReactjsLine,
    RiHtml5Line,
    RiCss3Line,
    RiJavascriptLine,
    RiNodejsLine,
    RiWordpressFill,
} from "react-icons/ri";
// import { SiMongodb, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";




// const iconVariants = (duration: number) => ({
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse"
//         }
//     }
// })

export default function Technologies() {

    return (
        <section id="technologies" className="border-b border-neutral-900 pb-24 ">
            <motion.h2
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duraiton: 1.5 }}
                className="my-20 text-center text-3xl lg:text-4xl">Tecnologias</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial={{ y: 10 }}
                    animate={{ y: [10, -10] }}
                    transition={{duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiHtml5Line className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                    initial={{ y: 10 }}
                    animate={{ y: [10, -10] }}
                    transition={{duration: 2.5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiCss3Line className="text-7xl text-blue-300" />
                </motion.div>
                <motion.div
                    initial={{ y: 10 }}
                    transition={{duration: 4, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={{ y: [10, -10] }}>
                    <RiJavascriptLine className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ y: 10 }}
                    transition={{duration: 5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                    animate={{ y: [10, -10] }}>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ y: 10 }}
                    transition={{duration: 3.5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                    animate={{ y: [10, -10] }}>
                    <RiNodejsLine className="text-7xl text-lime-800" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ y: 10 }}
                    animate={{ y: [10, -10] }}
                    transition={{duration: 5.2, ease: "linear", repeat: Infinity, repeatType: "reverse"}}>
                    <RiWordpressFill className="text-7xl text-blue-600" />
                </motion.div>
                {/* <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ y: 10 }}
                    animate={{ y: [10, -10] }}
                    transition={{duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse"}}>
                    <SiMongodb className="text-7xl text-green-600" />
                </motion.div> */}
                {/* <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ y: 10 }}
                    animate={{ y: [10, -10] }}
                    transition={{duration: 2.5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}>
                    <SiPostgresql className="text-7xl text-sky-900" />
                </motion.div> */}
            </motion.div>
        </section>
    )
}
