import Tag from "./Tag.jsx"
import PlaceholderImage from "../assets/images/projects/placeholder.png"
// ProjectCard.jsx
export default function ProjectCard({title, tag, description, imageSrc, techs, details}) {
    const placeholderImage = PlaceholderImage.src

    return (
        <>
            <div className="bg-secondary-bg bg-opacity-75 shadow-md rounded-lg overflow-hidden flex flex-col">
                <img src={imageSrc || placeholderImage} alt={title} className="w-full h-48 sm:h-64 md:h-48 lg:h-64 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
                    <div className="flex flex-wrap justify-start mb-2 gap-2">
                        {techs.map((tech, index) => (
                            <Tag name={tech} index={index} />
                        ))}
                    </div>
                    <p className="text-secondary-font mb-4 text-sm sm:text-base">{description}</p>
                    <ul className="text-sm text-tertiary-font mt-auto list-disc list-inside">
                        {details.map((detail, index) => (
                            <li key={index} className="py-1">{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}