import Tag from "./Tag.jsx"

export default function ProjectCard({title, tag, description, imageSrc, techs, details}) {
    if (imageSrc === "") {
        imageSrc = "/images/projects/placeholder.png"
    }

    return (
        <>
            <div className="bg-secondary-bg bg-opacity-75 shadow-md rounded-lg overflow-hidden flex flex-col">
                <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <div className="flex flex-wrap justify-center sm:justify-start mb-2 gap-2">
                        {techs.map(tech => (
                            <Tag name={tech} />
                        ))}
                    </div>
                    <p className="text-secondary-font mb-4">{description}</p>
                    <ul className="text-sm text-tertiary-font mt-auto list-disc list-inside">
                        {details.map((detail) => (
                            <li className="text-sm text-tertiary-font py-1">{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}