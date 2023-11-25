import Block from "@/components/features/explorer/atoms/block";
import BlockTitle from "../../atoms/block-title";
import Card from "@/components/common/atoms/card";
import tw from "tailwind-styled-components";
import { Category } from "@/app/api/bars/route";
import { getBarIcon } from "@/lib/common/common";

const DrinkCategories = ({ className = "" }) => {
    return (
        <Block className={className}>
            <BlockTitle>Où boire à Brest ?</BlockTitle>
            <div className="flex flex-row justify-between">
                {Object.keys(Category).map((category) => (
                    <div key={category}>
                        <Card className="p-10 text-4xl">{getBarIcon(Category[category as keyof typeof Category])}</Card>
                        <CategoryName>{Category[category as keyof typeof Category]}</CategoryName>
                    </div>
                ))}
            </div>
        </Block>
    );
};

const CategoryName = tw.div`
    capitalize
    text-white 
    text-center 
    mt-2
`;

export default DrinkCategories;
