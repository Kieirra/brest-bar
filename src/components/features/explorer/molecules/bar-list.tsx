import BarCard from "./bar-card";
import BlockTitle from "../atoms/block-title";
import Block from "@/components/features/explorer/atoms/block";
import { Bar } from "../../../../../types/bar";

const BarList = ({ bars, className }: { bars: Bar[]; className?: string }) => {
    return (
        <Block className={className}>
            <BlockTitle>Explorer</BlockTitle>
            <div className="flex flex-col space-y-6">
                {bars.map((bar, index) => (
                    <BarCard bar={bar} key={index} />
                ))}
            </div>
        </Block>
    );
};

export default BarList;
