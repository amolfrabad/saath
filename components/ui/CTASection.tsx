import Link from 'next/link';

interface ButtonProps {
    text: string;
    href: string;
    className?: string;
}

interface CTASectionProps {
    title: string;
    description: string;
    buttons: ButtonProps[];
}

export default function CTASection({ title, description, buttons }: CTASectionProps) {
    return (
        <section className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-3">
                {title}
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-sm">
                {description}
            </p>
            <div className="flex justify-center gap-4">
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
        </section>
    );
}