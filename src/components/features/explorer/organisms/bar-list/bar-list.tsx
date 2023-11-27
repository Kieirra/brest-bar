"use client";

import BarCard from "../../molecules/bar-card";
import BlockTitle from "../../atoms/block-title";
import Block from "@/components/features/explorer/atoms/block";
import { Bar, Category } from "../../../../../../types/bar";
import PlusButton from "../../atoms/plus-button";
import { useState } from "react";
import SortButton from "../../atoms/sort-button";
import { SortBy, sortByStars, filterByCategory } from "./helpers";

interface BarListProps {
    bars: Bar[];
    className?: string;
    category?: string;
    sortBy?: string;
}

const BarList = ({ bars, className, category = Category.ALL }: BarListProps) => {
    const [barsCount, setBarsCount] = useState(5);
    const [sortBy, setSortBy] = useState(SortBy.NONE);

    return (
        <Block className={className}>
            <div className="flex justify-between">
                <BlockTitle>Explorer</BlockTitle>
                <div className="mb-4 flex space-x-2">
                    <SortButton
                        className={sortBy === SortBy.HIGH_STARS ? "bg-primary-500" : ""}
                        onClick={() => setSortBy(SortBy.HIGH_STARS)}
                    >
                        ★ ↑
                    </SortButton>
                    <SortButton
                        className={sortBy === SortBy.LOW_STARS ? "bg-primary-500" : ""}
                        onClick={() => setSortBy(SortBy.LOW_STARS)}
                    >
                        ★ ↓
                    </SortButton>
                </div>
            </div>
            <div className="flex flex-col space-y-6">
                {bars
                    .sort(sortByStars(sortBy))
                    .filter(filterByCategory(category))
                    .slice(0, barsCount)
                    .map((bar, index) => (
                        <BarCard bar={bar} key={index} />
                    ))}
            </div>
            {barsCount < bars.filter(filterByCategory(category)).length && (
                <PlusButton
                    className="mx-auto my-4 block"
                    onClick={() => setBarsCount(barsCount + 5)}
                >
                    Voir plus
                </PlusButton>
            )}
        </Block>
    );
};

export default BarList;
