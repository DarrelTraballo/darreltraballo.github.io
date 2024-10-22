import SkillAccordion from "../components/SkillAccordion.jsx"
import SkillCard from "../components/SkillCard.jsx"
import { data } from "../utils/data.js"
import icons from "../utils/icons.js"

const skills = data.skills

export default function SkillsSection() {
    const languageSkills = skills.languages.filter((language) => language.yearsOfExperience >= 2)
    const techSkills = Object.entries(skills.technologies).flatMap(([_, technologies]) =>
        technologies.filter((technology) => technology.yearsOfExperience >= 2)
    )

    const hasFewSkills = languageSkills.length + techSkills.length < 6

    return (
        <section className="py-6 sm:py-8 md:py-10 mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold mb-6 md:mb-8">
                Skills and Technologies
            </h2>
            <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
                {hasFewSkills ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 auto-rows-auto">
                        {languageSkills.map((language) => (
                            <div key={language.name} className="h-auto">
                                <SkillCard
                                    iconSrc={icons[language.name === "C#" ? "CSharp" : language.name]}
                                    skillName={language.name}
                                />
                            </div>
                        ))}
                        {techSkills.map((technology) => (
                            <div key={technology.name} className="h-auto">
                                <SkillCard iconSrc={icons[technology.name]} skillName={technology.name} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <h3 className="text-base sm:text-lg md:text-xl px-2 sm:px-3 py-2 font-bold">Languages</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pb-4 auto-rows-auto">
                                {languageSkills.map((language) => (
                                    <div key={language.name} className="h-auto">
                                        <SkillAccordion
                                            iconSrc={icons[language.name === "C#" ? "CSharp" : language.name]}
                                            skillName={language.name}
                                            proficiency={language.proficiency}
                                            yearsOfExperience={language.yearsOfExperience}
                                            certifications={language.certifications}
                                            additionalDetails={language.additionalDetails}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base sm:text-lg md:text-xl px-2 sm:px-3 py-2 font-bold">
                                Technologies and Frameworks
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                                {Object.entries(skills.technologies).map(([categoryKey, technologies]) => (
                                    <div key={categoryKey} className="pb-4">
                                        {/* <h4 className="text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2 font-bold">{techCategories[categoryKey]}</h4> */}
                                        {technologies
                                            .filter((technology) => technology.yearsOfExperience >= 2)
                                            .map((technology) => (
                                                <div className="pb-2">
                                                    <SkillAccordion
                                                        key={technology.name}
                                                        iconSrc={icons[technology.name]}
                                                        skillName={technology.name}
                                                        proficiency={technology.proficiency}
                                                        yearsOfExperience={technology.yearsOfExperience}
                                                        certifications={technology.certifications}
                                                        additionalDetails={technology.additionalDetails}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
