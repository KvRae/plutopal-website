import { useEffect, useRef, useState } from 'react';


const images = [
    'https://placehold.co/800x450?text=1',
    'https://placehold.co/800x450?text=2',
    'https://placehold.co/800x450?text=3',
    'https://placehold.co/800x450?text=4',
    'https://placehold.co/800x450?text=5',
];

export default function AboutUs() {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    const scrollToIndex = (index) => {
        const container = carouselRef.current;
        const item = container?.children[index];
        if (item) {
            item.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            setActiveIndex(index);
        }
    };

    const scrollRight = () => {
        scrollToIndex((activeIndex + 1) % images.length);
    };

    const handleScroll = () => {
        const container = carouselRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const childWidth = container.children[0]?.offsetWidth || 1;
        const index = Math.round(scrollLeft / (childWidth + 16));
        setActiveIndex(index);
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const startAutoScroll = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(scrollRight, 5000); // every 5 seconds
        }
    };

    // Start auto-scroll on load
    useEffect(() => {
        startAutoScroll();

        const onPageScroll = () => {
            const carousel = carouselRef.current;
            if (!carousel) return;

            const rect = carousel.getBoundingClientRect();

            // Stop if carousel is mostly out of view (above or below screen)
            const fullyOutside =
                rect.bottom < 0 || rect.top > window.innerHeight;

            if (fullyOutside) {
                stopAutoScroll();
            }
        };

        window.addEventListener('scroll', onPageScroll);
        return () => {
            window.removeEventListener('scroll', onPageScroll);
            stopAutoScroll();
        };
    }, [activeIndex]);

    return (
        <div className="about-container">
            <div className="about-content-wrapper">
                {/* Your left and right content remains the same */}
                <div className="about-left-column">
                    <h1 className="about-heading">About Us</h1>
                    <p className="about-description">
                        Plutopal connects fashion designers with content creators, enabling collaboration and helping designers showcase their styles while influencers access engaging original content.
                    </p>
                </div>

                <div className="about-right-column">
                    <div className="about-stats-row">
                        <div className="stat-block">
                            <div className="stat-value">7 Million</div>
                            <div className="stat-label">Articles</div>
                        </div>
                        <div className="stat-block">
                            <div className="stat-value">100 thousand</div>
                            <div className="stat-label">Monthly active users</div>
                        </div>
                    </div>
                    <div className="about-stats-row">
                        <div className="stat-block">
                            <div className="stat-value">$100 Million</div>
                            <div className="stat-label">Revenue in 2026</div>
                        </div>
                        <div className="stat-block">
                            <div className="stat-value">50</div>
                            <div className="stat-label">Employees</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel-container">
                <div
                    className="carousel-track"
                    ref={carouselRef}
                    onScroll={handleScroll}
                    tabIndex={-1}
                >
                    {images.map((src, idx) => (
                        <img key={idx} src={src} alt={`Slide ${idx + 1}`} className="carousel-image" />
                    ))}
                </div>

                <div className="dot-indicators">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`dot ${i === activeIndex ? 'active' : ''}`}
                            onClick={() => scrollToIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
