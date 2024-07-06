import { PROJECTS } from "../data/info";


export default function Projects() {
    return (
        <section id="projects" className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projetos</h2>
            <div>
                {PROJECTS.map((project) => (
                    <div 
                        key={project.title}
                        className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img        
                                height={192}                                                         
                                src={project.image} 
                                alt={project.title}
                                className="mb-6 rounded w-full sm:max-w-48" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex gap-2 items-center flex-wrap">
                                {project.technologies.map((tech, techIndex) => (
                                    <span className="rounded px-2 py-1 bg-neutral-900 text-purple-400 text-sm font-medium" key={techIndex}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
