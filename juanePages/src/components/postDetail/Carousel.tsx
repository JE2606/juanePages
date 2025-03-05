import { useState, useEffect, ReactNode } from "react";

interface CarouselProps {
    children: ReactNode[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}) => {

    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

    const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div
            className="overflow-hidden relative rounded-2xl"
        >
            <div
                style={{ transform: `translateX(-${current * 100}%)` }}
                className="flex transition-transform ease-out duration-500"
            >
                {slides}
            </div>
            <div
                className="absolute inset-o flex items-center justify-between p-6"
            >
                <button
                    onClick={prev}
                    className="text-gray-800 hover:cursor-pointer"
                >
                    <i className="fas fa-angle-left"></i>
                </button>
                <button
                    onClick={next}
                    className="text-gray-800 hover:cursor-pointer"
                >
                    <i className="fas fa-angle-right"></i>
                </button>

            </div>

            <div
                className="absolute bottom-4 right-0 left-0"
            >

                <div
                    className="flex items-center justify-center gap-2 bg-black/90 w-fit mx-auto rounded-3xl p-2"
                >
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-1 h-1 bg-white/90 rounded-full ${current === i ? 'p-1' : 'bg-white/30'}`}
                        />
                    ))}

                </div>

            </div>

        </div>
    );

}