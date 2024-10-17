export default function Button({ iconSrc, displayText, href, isDownload = true }) {
    const style = isDownload ? `
        flex items-center bg-white hover:scale-110 text-primary-bg rounded-md overflow-hidden transition-all duration-200 ease-in-out mx-2 my-2 sm:px-3 sm:py-1.5 text-xs sm:text-sm cursor-pointer no-underline
    ` : `
        flex items-center bg-tertiary-font/50 hover:bg-tertiary-font text-primary-font rounded-full overflow-hidden transition-all duration-300 ease-in-out border border-tertiary-bg/30 px-2 py-2 sm:px-3 sm:py-1.5 text-xs sm:text-sm
    `
    
    return (
        <a 
            href={href}
            download={isDownload}
            className={style}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={iconSrc} className="w-3 h-3 sm:w-4 sm:h-4" alt={`${displayText} Icon`}/>    
            <span className={"ml-2 whitespace-nowrap"}>
                {displayText}
            </span>
        </a>
    )
}

