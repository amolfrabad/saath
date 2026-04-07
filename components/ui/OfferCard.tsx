interface OfferCardProps {
    title: string;
    description: string;
    imageSrc: string;
    alt?: string;
}

export default function OfferCard({ title, description, imageSrc, alt }: OfferCardProps) {
    return (
        <div className="flex items-center justify-between gap-4 p-5 border rounded-lg bg-white shadow-sm">
            <div>
                <strong className="block mb-1">✔ {title}</strong>
                <p className="text-sm text-gray-700">
                    {description}
                </p>
            </div>
            <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                <img
                    src={imageSrc}
                    alt={alt || title}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}