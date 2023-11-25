import Block from "@/components/features/explorer/atoms/block";
import BlockTitle from "../../atoms/block-title";
import Card from "@/components/common/atoms/card";
import tw from "tailwind-styled-components";

const categories = [
    {
        icon: "🍷",
        name: "Cave",
    },
    {
        icon: "🍺",
        name: "Brasserie",
    },
    {
        icon: "🍹",
        name: "Bar",
    },
];

const DrinkCategory = ({ className = "" }) => {
    return (
        <Block className={className}>
            <BlockTitle>Où boire à Brest ?</BlockTitle>
            <div className="flex flex-row justify-between">
                {categories.map((category) => (
                    <div key={category.name}>
                        <Card className="p-10 text-4xl">{category.icon}</Card>
                        <CategoryName>{category.name}</CategoryName>
                    </div>
                ))}
            </div>
        </Block>
    );
};

const CategoryName = tw.div`
    text-white 
    text-center 
    mt-2
`;

export default DrinkCategory;
