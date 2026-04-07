import Link from 'next/link';

interface ButtonProps {
    text: string;
    href: string;
    className?: string;
}

interface HeroBannerProps {
    title: string;
    description: string;
    imageSrc: string;
    buttons: ButtonProps[];
}

export default function HeroBanner({ title, description, imageSrc, buttons }: HeroBannerProps) {
    return (
        <section className="relative mt-4 rounded-lg overflow-hidden bg-gray-900">
            {/* Background image fills container */}
            <div className="absolute inset-0">
                <img
                    alt={title}
                    src={imageSrc}
                    className="h-full w-full object-cover"
                />
                {/* Optional dark gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 px-6 py-16 md:px-12 md:py-20">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        {title}
                    </h1>
                    <p className="text-gray-100 mb-6">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {buttons.map((button, index) => (
                            <Link
                                key={index}
                                href={button.href}
                                className={button.className || "btn-primary inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]"}
                            >
                                {button.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}