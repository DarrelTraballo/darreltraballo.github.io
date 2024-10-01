import Tag from "./Tag"

export default function ProjectCard({title, description, imageSrc, techs, details}) {
    if (imageSrc === "") {
        imageSrc = "/images/projects/placeholder.png"
    }

    return (
        <>
            <div className="bg-secondary-bg shadow-md rounded-lg overflow-hidden flex flex-col">
                <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-sm text-secondary-font mb-2">
                        {techs.map(tech => (
                            <Tag label={tech} />
                        ))}
                    </p>
                    <p className="text-secondary-font mb-4">{description}</p>
                    <p className="text-sm text-tertiary-font mt-auto">
                        {details.map((detail) => (
                            <p className="text-sm text-tertiary-font mt-auto">{detail}</p>
                        ))}
                    </p>
                </div>
            </div>
        </>
    )
}