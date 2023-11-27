import BarCard from "./bar-card";
import BlockTitle from "../atoms/block-title";
import Block from "@/components/features/explorer/atoms/block";
import { Bar, Category } from "../../../../../types/bar";
import PlusButton from "../atoms/plus-button";

interface BarListProps {
    bars: Bar[];
    className?: string;
    loadMoreBars?: CallableFunction;
    category?: string;
}

const BarList = ({ bars, className, loadMoreBars, category = Category.ALL }: BarListProps) => {
    const byCategory = (bar: Bar) => bar.category === category || category === Category.ALL;
    return (
        <Block className={className}>
            <BlockTitle>Explorer</BlockTitle>
            <div className="flex flex-col space-y-6">
                {bars.filter(byCategory).map((bar, index) => (
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
