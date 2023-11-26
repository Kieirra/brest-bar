"use client";

import BarCard, { BarCardProps } from "../../molecules/bar-card";
import useBarsAPI from "../../../../../hooks/use-bars-api";
import BlockTitle from "../../atoms/block-title";
import Block from "@/components/features/explorer/atoms/block";

const BarList = ({ className = "" }) => {
    const { bars } = useBarsAPI();
    return <BarListUI bars={bars} className={className} />;
};

export const BarListUI = ({ bars, className }: { bars: BarCardProps[]; className?: string }) => {
    return (
        <Block className={className}>
            <BlockTitle>Explorer</BlockTitle>
            <div className="flex flex-col space-y-6">
                {bars.map((bar, index) => (
                    <BarCard item={bar} key={index} />
                ))}
            </div>
        </Block>
    );
};

export default BarList;
