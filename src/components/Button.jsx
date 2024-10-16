import { useState } from "react"

export default function Button({ iconSrc, displayText, href }) {    
    return (
        <a 
            href={href}
            download
            className={`flex items-center bg-white hover:bg-secondary-font text-secondary-bg rounded-md overflow-hidden transition-all duration-300 ease-in-out border mx-2 my-2 sm:px-3 sm:py-1.5 text-xs sm:text-sm cursor-pointer no-underline`}
        >
            <img src={iconSrc} className="w-3 h-3 sm:w-4 sm:h-4" alt={`${displayText} Icon`}/>    
            <span className={"ml-2 whitespace-nowrap"}>
                {displayText}
            </span>
        </a>
    )
}

