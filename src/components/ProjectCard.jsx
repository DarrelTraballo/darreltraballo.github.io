import { useState } from "react"

function ProjectModal(props) {
    return (
        <>
            <div className="bg-secondary-bg shadow-md rounded-lg overflow-hidden flex flex-col">
                <img src={props.imageSrc} alt={props.title} className="w-full h-auto rounded-lg object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{props.title}</h3>
                    <p className="text-sm text-secondary-font mb-2">
                        {props.tech.map((tech, index) => (
                            <span>
                                {tech}{index !== tech.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                    <p className="text-secondary-font mb-4">{props.description}</p>
                    <p className="text-sm text-tertiary-font mt-auto">
                        {props.details.map((detail) => (
                            <p className="text-sm text-tertiary-font mt-auto">{detail}</p>
                        ))}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProjectModal