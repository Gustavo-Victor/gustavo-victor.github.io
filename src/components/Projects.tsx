import { PROJECTS } from "../data/info";
import { motion } from "framer-motion";


export default function Projects() {
    return (
        <section id="projects" className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Projetos
            </motion.h2>
            <div>
                {PROJECTS.map((project) => (
                    <div
                        key={project.title}
                        className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img
                                height={192}
                                src={project.image}
                                alt={project.title}
                                className="mb-6 rounded w-full sm:max-w-48" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex gap-2 items-center flex-wrap">
                                {project.technologies.map((tech, techIndex) => (
                                    <span className="rounded px-2 py-1 bg-neutral-900 text-purple-400 text-sm font-medium" key={techIndex}>{tech}</span>
                                ))}
                            </div>
                            <div className="flex items-center mt-4 gap-3">
                                <a
                                    className="py-2 px-4 rounded bg-transparent border-2 border-purple-400 cursor-pointer"
                                    target="_blank" 
                                    href={project.repositoryURL}>
                                    Repositório
                                </a>
                                <a 
                                    className="py-2 px-4 rounded bg-purple-400 text-neutral-900 border-2 border-purple-400 cursor-pointer" 
                                    target="_blank" 
                                    href={project.projectURL}>
                                    Website
                                </a>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}
