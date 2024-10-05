const icons = {
    "Unity": "/images/icons/devicon-plain--unity.png",
    "C#": "/images/icons/devicon-plain--csharp.png",
    "Python": "/images/icons/devicon-plain--python.png",
    "Numpy": "/images/icons/devicon-plain--numpy.png",
    "Pandas": "/images/icons/devicon-plain--pandas.png",
    "Matplotlib": "/images/icons/devicon-plain--matplotlib.png",
    "Pygame": "/images/icons/pygame-logo.png",
    "Game Development": "/images/icons/mdi--gamepad-variant.png",
    "Game Developer": "/images/icons/mdi--gamepad-variant.png",
}

export default function Tag({ name }) {
    return (
        <div 
            key={`${name}`} 
            className="flex items-center bg-tertiary-font/20 hover:bg-tertiary-font/30 text-primary-font rounded-full px-3 py-1.5 text-sm transition-colors duration-200 ease-in-out border border-tertiary-bg/30"
        >
            {icons[name] && (
                <img src={icons[name]} className="w-4 h-4 mr-2" alt={name}/>
            )}
            <span>{name}</span>
        </div>
    )
}
