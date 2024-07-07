import { EXPERIENCES } from "../data/info";
import { motion } from "framer-motion";


export default function Experience() {
    return (
        <section id="experiences" className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.3 }}
                className="my-20 text-center text-3xl lg:text-4xl">Experiência</motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.7 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.7 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-blue-100">{experience.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <div className="flex gap-2 items-center flex-wrap">
                                {experience.technologies.map((tech, techIndex) => (
                                    <span className="text-sm mt-4 bg-neutral-900 px-2 py-1 rounded font-medium text-blue-500" key={techIndex}>{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}
