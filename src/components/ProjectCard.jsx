import Tag from "./Tag.jsx"
import Button from "./Button.jsx"
import PlaceholderImage from "../assets/images/projects/placeholder.png"
import icons from "../utils/icons.js"

export default function ProjectCard({ title, tag, description, imageSrc, techs, details, isPlayable, href = "" }) {
    const placeholderImage = PlaceholderImage.src

    return (
        <>
            <div className="bg-secondary-bg/75 shadow-md rounded-lg overflow-hidden flex flex-col hover:bg-hover-bg/75 transition-all duration-200">
                <img
                    src={imageSrc || placeholderImage}
                    alt={title}
                    className="w-full h-48 sm:h-64 md:h-48 lg:h-64 object-cover rounded-lg"
                />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
                    <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                        <div className="flex flex-wrap gap-2">
                            {techs.map((tech, index) => (
                                <Tag
                                    key={`${title}-${tech}-${index}`}
                                    iconSrc={icons[tech]}
                                    displayText={tech === "CSharp" ? "C#" : tech}
                                    index={index}
                                />
                            ))}
                        </div>
                        {isPlayable && (
                            <Button
                                key="play-now-tag"
                                iconSrc={icons["Play"]}
                                displayText={tag.includes("Game Development") ? "Try it Out!" : "View"}
                                href={href}
                                index={techs.length}
                                isDownload={false}
                            />
                        )}
                    </div>
                    <p className="text-secondary-font mb-4 text-sm sm:text-base">{description}</p>
                    <ul className="text-sm text-tertiary-font mt-auto list-disc list-inside">
                        {details.map((detail, index) => (
                            <li key={`${title}-detail-${index}`} className="py-1">
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
