export default function ImageCard({ imageSrc, altText }) {
    return (
        <div className="rounded-full p-2 text-center">
            <img src={imageSrc} alt={altText} className="w-auto h-auto rounded-full object-cover" />
        </div>
    )
}