import icons from "../utils/icons.js"

export default function SkillCard({ iconSrc, skillName }) {
    return (
        <div className='w-full max-w-2xl mx-auto rounded-lg shadow-sm bg-secondary-bg/75 transition-all duration-300 hover:shadow-md'>
            <div
                className='w-full flex items-center justify-between p-3 sm:p-4 hover:bg-hover-bg/75 rounded-lg transition-all duration-200'
            >
                <div className='flex items-center gap-2 sm:gap-3 min-w-10'>
                    <img 
                        src={iconSrc || icons.DefaultWhite} 
                        className="w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform duration-200 hover:scale-110" 
                        alt={`${skillName} Icon`}
                    />
                    <span className='font-medium text-primary-font text-sm sm:text-base break-words text-left'>{skillName}</span>
                </div>
            </div>
        </div>
    )
}