import { useState } from 'react'
import icons from "../utils/icons.js"

export default function SkillAccordion({ 
    iconSrc,
    skillName = "Skill Name",
    proficiency = "Beginner",
    yearsOfExperience = 0,
    certifications = [],
    additionalDetails = "Additional Details",   
}) {
    const [isOpen, setIsOpen] = useState(false)

    const getProficiencyColor = (level) => {
        switch (level.toLowerCase()) {
            case "beginner":
                return "bg-blue-100 text-blue-700"
            case "intermediate":
                return "bg-green-100 text-green-700"
            case "advanced":
                return "bg-purple-100 text-purple-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <div className='w-full max-w-2xl mx-auto rounded-lg shadow-sm bg-primary-bg bg-opacity-75 transition-all duration-300 hover:shadow-md'>
            {/* Header Section */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='w-full flex items-center justify-between p-3 sm:p-4 hover:bg-secondary-bg rounded-lg transition-all duration-200'
            >
                <div className='flex items-center gap-2 sm:gap-3 min-w-10'>
                    <img 
                        src={iconSrc || icons.DefaultWhite} 
                        className="w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform duration-200 hover:scale-110" 
                        alt={`${skillName} Icon`}
                    />
                    <span className='font-medium text-primary-font text-sm sm:text-base break-words'>{skillName}</span>
                </div>
                <svg 
                    className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-200 text-secondary-font ml-4 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Content Section */}
            <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
                <div className="p-3 sm:p-4 pt-0 sm:pt-2 space-y-3 sm:space-y-4">
                    {/* Proficiency */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs sm:text-sm text-secondary-font">Proficiency:</span>
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(proficiency)}`}>
                            {proficiency}
                        </span>
                    </div>
                    {/* Years of Experience */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs sm:text-sm text-secondary-font">Experience:</span>
                        <span className="text-xs sm:text-sm font-medium text-primary-font">
                            {yearsOfExperience === 0 ? "< 1 year" : `${yearsOfExperience} ${yearsOfExperience === 1 ? "year" : "years"}`}
                        </span>
                    </div>

                    {/* Certifications (if any) */}
                    {certifications.length > 0 && (
                        <div className="space-y-2">
                            <span className="text-xs sm:text-sm text-secondary-font">Certifications:</span>
                            <ul className="ml-2 space-y-1">
                                {certifications.map((certification, index) => (
                                    <li 
                                        key={`${skillName}-${certification}-${index}`} 
                                        className=" flex items-center gap-2 text-xs sm:text-sm text-tertiary-font"
                                    >
                                        <svg 
                                            className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M5 13l4 4L19 7" 
                                            />
                                        </svg>
                                        <span className="break-words">{certification}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Additional Details */}
                    {additionalDetails && (
                        <div className="space-y-2 border-t pt-3">
                            <div className="flex items-center gap-2">
                                <svg 
                                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                    />
                                </svg>
                                <span className="text-xs sm:text-sm text-secondary-font">Additional Details:</span>
                            </div>
                            <p className="text-xs sm:text-sm text-tertiary-font ml-5 sm:ml-6 break-words">{additionalDetails}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}