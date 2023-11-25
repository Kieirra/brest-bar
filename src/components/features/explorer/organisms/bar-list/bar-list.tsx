"use client";

import tw from "tailwind-styled-components";
import BarCard, { BarCardProps } from "../../molecules/bar-card";
import useBarList from "./use-bar-list";

const BarList = ({ className = "" }) => {
    const { bars } = useBarList();
    return <BarListUI bars={bars} className={className} />;
};

export const BarListUI = ({ bars, className }: { bars: BarCardProps[]; className?: string }) => {
    return (
        <div className={`bg-ngrey-800 p-4 max-w-lg ${className}`}>
            <Title>Explorer</Title>
            <div className="flex flex-col space-y-6">
                {bars.map((bar, index) => (
                    <BarCard item={bar} key={index} />
                ))}
            </div>
        </div>
    );
};

const Title = tw.h1`
  uppercase 
  bold 
  mb-4 
  text-2xl 
  text-white
`;

export default BarList;
