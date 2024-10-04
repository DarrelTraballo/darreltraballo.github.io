export default function ImageCard({ imageSrc, altText }) {
    return (
        <div className="rounded-full p-2">
            <img src={imageSrc} alt={altText} className="w-full h-auto rounded-full object-cover" />
        </div>
    )
}