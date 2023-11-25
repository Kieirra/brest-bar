"use client";

import tw from "tailwind-styled-components";
import BarCard, { BarCardProps } from "../molecules/bar-card";
import useBarList from "./use-bar-list";

const BarList = () => {
    const { bars } = useBarList();
    return <BarListUI bars={bars} />;
};

export const BarListUI = ({ bars }: { bars: BarCardProps[] }) => {
    return (
        <div className="bg-ngrey-800 p-4 max-w-lg">
            <Title>Explorer</Title>
            <div className="flex flex-col space-y-6">
                {bars.map((bar) => (
                    <BarCard item={bar} />
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
