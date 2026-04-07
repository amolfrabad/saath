import Link from 'next/link';

interface ButtonProps {
    text: string;
    href: string;
    className?: string;
}

interface HeroSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    buttons: ButtonProps[];
}

export default function HeroSection({ title, description, imageSrc, buttons }: HeroSectionProps) {
    return (
        <section className="mt-6 rounded-lg bg-gray-50 px-6 py-10 md:px-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-700 mb-4">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
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

                <div className="h-56 md:h-72 rounded-lg overflow-hidden bg-gray-200">
                    <img
                        src={imageSrc}
                        alt="Person being listened to with care"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}