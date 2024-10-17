export default function Button({ iconSrc, displayText, href }) {    
    return (
        <a 
            href={href}
            download
            className={`flex items-center bg-white hover:bg-secondary-font hover:scale-110 text-primary-bg rounded-md overflow-hidden transition-all duration-200 ease-in-out mx-2 my-2 sm:px-3 sm:py-1.5 text-xs sm:text-sm cursor-pointer no-underline`}
        >
            <img src={iconSrc} className="w-3 h-3 sm:w-4 sm:h-4" alt={`${displayText} Icon`}/>    
            <span className={"ml-2 whitespace-nowrap"}>
                {displayText}
            </span>
        </a>
    )
}

