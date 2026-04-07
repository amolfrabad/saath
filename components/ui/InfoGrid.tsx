interface InfoItemProps {
    title: string;
    content: string | React.ReactNode;
    imageSrc: string;
    alt?: string;
}

interface InfoGridProps {
    items: InfoItemProps[];
}

export default function InfoGrid({ items }: InfoGridProps) {
    return (
        <div className="mx-auto mb-10 grid gap-10 md:grid-cols-2 text-left">
            {items.map((item, index) => (
                <div key={index} className="bg-white rounded-lg border shadow-sm overflow-hidden">
                    <div className="h-32 w-full overflow-hidden bg-gray-100">
                        <img
                            src={item.imageSrc}
                            alt={item.alt || item.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-5">
                        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                            {item.title}
                        </h2>
                        {typeof item.content === 'string' ? (
                            <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                        ) : (
                            item.content
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}