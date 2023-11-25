import { Category } from "@/app/api/bars/route";
import Card from "@/components/common/atoms/card";
import tw from "tailwind-styled-components";

export interface BarCardProps {
    name: string;
    address: string;
    website: string;
    category: Category;
}

const BarCard = ({ item }: { item: BarCardProps }) => {
    return (
        <Card className="max-w-lg">
            <Title>{item.name}</Title>
            <div className="text-primary-400">{item.address}</div>
            <Website>{item.website}</Website>
        </Card>
    );
};

const Title = tw.h2`
    text-white 
    font-bold 
    text-xl
`;

const Website = tw.a`
    text-accent-300 
    italic 
    text-sm
`;

export default BarCard;
