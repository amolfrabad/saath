import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    alt?: string;
    href: string;
}

export default function ServiceCard({ title, description, imageSrc, alt, href }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className="group block overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:border-blue-200"
        >
            <div className="h-32 w-full overflow-hidden bg-gray-100">
                <img
                    src={imageSrc}
                    alt={alt || title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-6">
                <h3 className="font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {title}
                </h3>
                <p className="text-sm text-gray-600">
                    {description}
                </p>
            </div>
        </Link>
    );
}