export default function ImageCard({ imageSrc, altText }) {
    if (imageSrc === "") {
        imageSrc = "/images/face/profile_pic.png"
    }

    return (
        <div className="rounded-full shadow-md p-2">
            <img src={imageSrc} alt={altText} className="w-full h-auto rounded-full object-cover" />
        </div>
    )
}