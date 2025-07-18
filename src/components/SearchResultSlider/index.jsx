import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GAP = 24; // gap between cards

const SearchResultsSlider = ({ searchResults }) => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [x, setX] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    useEffect(() => {
        const updateScrollLimit = () => {
            if (containerRef.current && cardRef.current && searchResults.length) {
                const cardWidth = cardRef.current.offsetWidth;
                const containerWidth = containerRef.current.offsetWidth;
                const totalWidth = searchResults.length * cardWidth + GAP * (searchResults.length - 1);
                const scrollLimit = containerWidth >= totalWidth ? 0 : -(totalWidth - containerWidth);
                setMaxScroll(scrollLimit);
            }
        };

        updateScrollLimit();
        const resizeObserver = new ResizeObserver(updateScrollLimit);
        if (cardRef.current) resizeObserver.observe(cardRef.current);
        if (containerRef.current) resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, [searchResults]);

    const handleSlide = (dir) => {
        if (!cardRef.current) return;
        const cardWidth = cardRef.current.offsetWidth + GAP;
        const shift = cardWidth * 1.5;

        let newX = dir === 'left' ? x + shift : x - shift;
        if (newX > 0) newX = 0;
        if (newX < maxScroll) newX = maxScroll;
        setX(newX);
    };

    return (
        <div className="relative px-2 sm:px-6 lg:px-8 py-8 pt-4 bg-white rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Search Results</h2>
                <div className="hidden md:flex gap-3">
                    <button onClick={() => handleSlide('left')} className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full h-12 w-12 p-3 shadow transition">
                        <i className="fi fi-rr-angle-left"></i>
                    </button>
                    <button onClick={() => handleSlide('right')} className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full h-12 w-12 p-3 shadow transition">
                        <i className="fi fi-rr-angle-right"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Arrows */}
            <div className="md:hidden absolute top-1/2 left-2 z-10 -translate-y-1/2">
                <button onClick={() => handleSlide('left')} className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full h-12 w-12 p-3 shadow transition">
                    <i className="fi fi-rr-angle-left"></i>
                </button>
            </div>
            <div className="md:hidden absolute top-1/2 right-2 z-10 -translate-y-1/2">
                <button onClick={() => handleSlide('right')} className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full h-12 w-12 p-3 shadow transition">
                    <i className="fi fi-rr-angle-right"></i>
                </button>
            </div>

            {/* Scrollable container */}
            <div ref={containerRef} className="overflow-hidden py-4 px-2 bg-gray-50 rounded-lg">
                <motion.div
                    className="flex gap-6"
                    animate={{ x }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    {searchResults.map((result, index) => (
                        <div
                            key={`${result.type}-${result.id}-${index}`}
                            ref={index === 0 ? cardRef : null}
                            className="w-[280px] flex-shrink-0 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow hover:scale-[1.015] overflow-hidden"
                        >
                            {result.type === 'campaign' ? (
                                <>
                                    <div className="relative">
                                        <img src={result.image} alt={result.title} className="w-full h-40 object-cover" />
                                        <div className="absolute top-2 left-2">
                                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                                {result.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-2 right-2">
                                            <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
                                                {result.daysLeft} days left
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 text-sm line-clamp-2 mb-1">{result.title}</h3>
                                        <p className="text-xs text-gray-600 line-clamp-2 mb-1">{result.description}</p>
                                        <p className="text-xs text-gray-500 mb-2">by {result.ngo}</p>
                                        <div className="space-y-1 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Raised:</span>
                                                <span className="font-semibold text-green-600">{result.raised}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Goal:</span>
                                                <span className="font-semibold">{result.goal}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Donors:</span>
                                                <span className="font-semibold">{result.donors}</span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                                            <div
                                                className="bg-green-500 h-2 rounded-full"
                                                style={{
                                                    width: `${(parseInt(result.raised.replace(/[^\d]/g, '')) /
                                                        parseInt(result.goal.replace(/[^\d]/g, ''))) *
                                                        100
                                                        }%`,
                                                }}
                                            />
                                        </div>
                                        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">
                                            Support This Campaign
                                        </button>
                                    </div>
                                </>
                            ) : (
                                // NGO Card
                                <div className="p-4">
                                    <div className="flex items-center mb-3">
                                        <img src={result.image} alt={result.name} className="w-12 h-12 rounded-lg object-cover" />
                                        <div className="ml-3 flex-1">
                                            <div className="flex justify-between">
                                                <h3 className="text-sm font-bold text-gray-900">{result.name}</h3>
                                                {result.verified && (
                                                    <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded-full">✓ Verified</span>
                                                )}
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <div className="flex text-yellow-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-4 h-4 ${i < Math.floor(result.rating) ? 'text-yellow-400' : 'text-gray-300'
                                                                }`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="ml-2 text-xs text-gray-600">{result.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">{result.description}</p>
                                    <div className="flex justify-between mb-3">
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{result.cause}</span>
                                        <span className="text-xs text-gray-500">{result.donors} donors</span>
                                    </div>
                                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">
                                        View NGO Profile
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
     </div >
    );
};

export default SearchResultsSlider;
