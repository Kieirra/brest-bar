"use client";

import BarCard from "./bar-card";
import BlockTitle from "../atoms/block-title";
import Block from "@/components/features/explorer/atoms/block";
import { Bar, Category } from "../../../../../types/bar";
import PlusButton from "../atoms/plus-button";
import { useState } from "react";

interface BarListProps {
    bars: Bar[];
    className?: string;
    category?: string;
}

const BarList = ({ bars, className, category = Category.ALL }: BarListProps) => {
    const [barsCount, setBarsCount] = useState(5);
    const byCategory = (bar: Bar) => bar.category === category || category === Category.ALL;

    return (
        <Block className={className}>
            <BlockTitle>Explorer</BlockTitle>
            <div className="flex flex-col space-y-6">
                {bars
                    .filter(byCategory)
                    .slice(0, barsCount)
                    .map((bar, index) => (
                        <BarCard bar={bar} key={index} />
                    ))}
            </div>
            <PlusButton className="block mx-auto my-4" onClick={() => setBarsCount(barsCount + 5)}>
                Voir plus
            </PlusButton>
        </Block>
    );
};

export default BarList;
