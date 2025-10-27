"use client";

import React, { useState } from "react";
import Icon from "./Icon";

interface RatingProps {
    defaultRate?: number;
    onRate?: (rate: number) => void;
    size?: number;
    className?: string;
    maxStars?: number;
}

const Rating: React.FC<RatingProps> = ({ defaultRate = 0, onRate, size = 32, className = "", maxStars = 5 }) => {
    const [currentRate, setCurrentRate] = useState(defaultRate);
    const [hoverRate, setHoverRate] = useState(0);

    const handleStarClick = (rate: number) => {
        setCurrentRate(rate);
        onRate?.(rate);
    };

    const handleStarHover = (rate: number) => {
        setHoverRate(rate);
    };

    const handleMouseLeave = () => {
        setHoverRate(0);
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {Array.from({ length: maxStars }, (_, index) => {
                const starNumber = index + 1;
                const isActive = starNumber <= (hoverRate || currentRate);

                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleStarClick(starNumber)}
                        onMouseEnter={() => handleStarHover(starNumber)}
                        onMouseLeave={handleMouseLeave}
                        className="cursor-pointer transition-transform hover:scale-110 focus:outline-none"
                    >
                        <Icon icon={isActive ? "icon-star-at" : "icon-star"} size={size} />
                    </button>
                );
            })}
        </div>
    );
};

export default Rating;
