interface FeatureCardProps {
    title: string;
    description: string;
    imageSrc: string;
    alt?: string;
    emoji?: string;
}

export default function FeatureCard({ title, description, imageSrc, alt, emoji }: FeatureCardProps) {
    return (
        <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="h-32 w-full overflow-hidden bg-gray-100">
                <img
                    src={imageSrc}
                    alt={alt || title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {emoji && <span>{emoji}</span>}
                    <span>{title}</span>
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}