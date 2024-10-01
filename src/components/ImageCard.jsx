export default function ImageCard({ imageSrc, altText }) {
    if (imageSrc === "") {
        imageSrc = "/images/face/profile_pic.png"
    }

    return (
        <div className="rounded-lg shadow-md p-4">
            <img src={imageSrc} alt={altText} className="w-full h-auto rounded-lg object-cover" />
        </div>
    )
}