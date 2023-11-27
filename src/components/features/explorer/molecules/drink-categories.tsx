import Block from "@/components/features/explorer/atoms/block";
import BlockTitle from "../atoms/block-title";
import Card from "@/components/common/atoms/card";
import tw from "tailwind-styled-components";
import { Category } from "../../../../../types/bar";
import { getBarIcon } from "@/helpers/common";
import { useState } from "react";

const DrinkCategories = ({ className = "" }) => {
    const [selectedCategory, setSelectedCategory] = useState(Category.ALL);

    return (
        <Block className={className}>
            <BlockTitle>Où boire à Brest ?</BlockTitle>
            <div className="flex flex-row flex-wrap justify-between">
                {Object.keys(Category).map((category) => (
                    <div key={category}>
                        <Card
                            className={`p-10 text-4xl hover:bg-ngrey-900 hover:cursor-pointer transition-all border-2 border-transparent ${
                                selectedCategory === Category[category as keyof typeof Category]
                                    ? "border-primary-500 bg-ngrey-900"
                                    : ""
                            }`}
                            onClick={() =>
                                setSelectedCategory(Category[category as keyof typeof Category])
                            }
                        >
                            {getBarIcon(Category[category as keyof typeof Category])}
                        </Card>
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
    my-2
`;

export default DrinkCategories;
