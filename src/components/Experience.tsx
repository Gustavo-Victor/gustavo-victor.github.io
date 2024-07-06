import { EXPERIENCES } from "../data/info";


export default function Experience() {
  return (
    <section id="experiences" className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Experiência</h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div 
                    key={index} 
                    className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience.role} -{" "} 
                            <span className="text-sm text-purple-100">{experience.company}</span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                        <div className="flex gap-2 items-center flex-wrap">
                            {experience.technologies.map((tech, techIndex) => (
                                <span className="text-sm mt-4 bg-neutral-900 px-2 py-1 rounded font-medium text-purple-400" key={techIndex}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
