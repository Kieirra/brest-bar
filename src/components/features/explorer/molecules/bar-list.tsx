import { MouseEventHandler } from "react";
import BarCard from "./bar-card";
import BlockTitle from "../atoms/block-title";
import Block from "@/components/features/explorer/atoms/block";
import { Bar } from "../../../../../types/bar";
import PlusButton from "../atoms/plus-button";

interface BarListProps {
    bars: Bar[];
    className?: string;
    loadMoreBars?: CallableFunction;
}

const BarList = ({ bars, className, loadMoreBars }: BarListProps) => {
    return (
        <Block className={className}>
            <BlockTitle>Explorer</BlockTitle>
            <div className="flex flex-col space-y-6">
                {bars.map((bar, index) => (
                    <BarCard bar={bar} key={index} />
                ))}
            </div>
            <PlusButton
                className="block mx-auto my-4"
                onClick={() => loadMoreBars && loadMoreBars()}
            >
                Voir plus
            </PlusButton>
        </Block>
    );
};

export default BarList;
