import UnityIcon from "../assets/images/icons/devicon-plain--unity.png"
import CSharpIcon from "../assets/images/icons/devicon-plain--csharp.png"
import PythonIcon from "../assets/images/icons/devicon-plain--python.png"
import NumpyIcon from "../assets/images/icons/devicon-plain--numpy.png"
import PandasIcon from "../assets/images/icons/devicon-plain--pandas.png"
import MatplotlibIcon from "../assets/images/icons/devicon-plain--matplotlib.png"
import PygameIcon from "../assets/images/icons/pygame-logo.png"
import GamepadVariantIcon from "../assets/images/icons/mdi--gamepad-variant.png"

const icons = {
    "Unity": UnityIcon.src,
    "C#": CSharpIcon.src,
    "Python": PythonIcon.src,
    "Numpy": NumpyIcon.src,
    "Pandas": PandasIcon.src,
    "Matplotlib": MatplotlibIcon.src,
    "Pygame": PygameIcon.src,
    "Game Development": GamepadVariantIcon.src,
    "Game Developer": GamepadVariantIcon.src,
}
// Tag.jsx
export default function Tag({ name = "", src = "", text = "" }) {
    return (
        <div 
            key={`${name}`} 
            className="flex items-center bg-tertiary-font/20 hover:bg-tertiary-font/30 text-primary-font rounded-full px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm transition-colors duration-200 ease-in-out border border-tertiary-bg/30"
        >
            {(src !== "" ? src : icons[name]) && (
                <img src={src !== "" ? src : icons[name]} className="w-3 h-3 sm:w-4 sm:h-4 mr-2" alt={name}/>
            )}
            <span>{(name !== "" ? name : text)}</span>
        </div>
    )
}

