import { useState } from "react"

export default function Tag({ iconSrc, displayText, index, expandable = true }) {
    const [isHovered, setIsHovered] = useState(false)

    const containerClasses = `
        flex items-center bg-tertiary-font/50 hover:bg-tertiary-font text-primary-font rounded-full overflow-hidden transition-all duration-300 ease-in-out border border-hover-bg/30 px-2 py-2 sm:px-3 sm:py-1.5 text-xs sm:text-sm
    `

    const textClasses = `
        ${expandable ? 'whitespace-nowrap overflow-hidden transition-all duration-100 ease-in-out' : ''}
        ${expandable && isHovered ? 'max-w-xs ml-2 opacity-100' : ''}
        ${expandable && !isHovered ? 'max-w-0 ml-0 opacity-0' : ''}
        ${!expandable ? 'ml-2' : ''}
    `
    
    return (
        <div 
            key={`tag-${index}`} 
            className={containerClasses}
            onMouseEnter={() => expandable && setIsHovered(true)}
            onMouseLeave={() => expandable && setIsHovered(false)}
        >
            <img src={iconSrc} className="w-3 h-3 sm:w-4 sm:h-4" alt={`${displayText} Icon`}/>    
            <span className={textClasses}>
                {displayText}
            </span>
        </div>
    )
}

