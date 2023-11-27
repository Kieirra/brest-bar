"use client";

import BarCard from "../bar-card";
import BlockTitle from "../../atoms/block-title";
import Block from "@/components/features/explorer/atoms/block";
import { Bar, Category } from "../../../../../../types/bar";
import PlusButton from "../../atoms/plus-button";
import { useState } from "react";
import SortButton from "../../atoms/sort-button";

interface BarListProps {
    bars: Bar[];
    className?: string;
    category?: string;
    sortBy?: string;
}

enum SortBy {
    HIGH_STARS = "high_stars",
    LOW_STARS = "low_stars",
    NONE = "none",
}

const BarList = ({ bars, className, category = Category.ALL }: BarListProps) => {
    const [barsCount, setBarsCount] = useState(5);
    const [sortBy, setSortBy] = useState(SortBy.NONE);

    const filterByCategory = (bar: Bar) => bar.category === category || category === Category.ALL;
    const sortByStars = (a: Bar, b: Bar) => {
        // Gérer le cas où le rating est null
        const aRating = a.rating ? a.rating : -Infinity;
        const bRating = b.rating ? b.rating : -Infinity;
        if (sortBy === SortBy.HIGH_STARS) {
            return bRating - aRating;
        } else if (sortBy === SortBy.LOW_STARS) {
            return aRating - bRating;
        } else {
            return 0;
        }
    };

    return (
        <Block className={className}>
            <div className="flex justify-between">
                <BlockTitle>Explorer</BlockTitle>
                <div className="flex space-x-2 mb-4">
                    <SortButton onClick={() => setSortBy(SortBy.HIGH_STARS)}>★ ↑</SortButton>
                    <SortButton onClick={() => setSortBy(SortBy.LOW_STARS)}>★ ↓</SortButton>
                </div>
            </div>
            <div className="flex flex-col space-y-6">
                {bars
                    .sort(sortByStars)
                    .filter(filterByCategory)
                    .slice(0, barsCount)
                    .map((bar, index) => (
                        <BarCard bar={bar} key={index} />
                    ))}
            </div>
            {barsCount < bars.filter(filterByCategory).length && (
                <PlusButton
                    className="block mx-auto my-4"
                    onClick={() => setBarsCount(barsCount + 5)}
                >
                    Voir plus
                </PlusButton>
            )}
        </Block>
    );
};

export default BarList;
