import { Category } from "@/app/api/bars/route";
import Card from "@/components/common/atoms/card";
import { getBarIcon } from "@/lib/common/common";
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
            <Title>
                <span className="pr-2">{getBarIcon(item.category)}</span> {item.name}
            </Title>
            <div className="text-white text-sm mb-2">
                <span className="text-yellow-300">★★★✰✰</span> 675 avis -{" "}
                <span className="text-red-300">Fermé à l'heure actuelle</span>
            </div>
            <div className="text-white">{item.address}</div>
            <Website>{item.website}</Website>
        </Card>
    );
};

const Title = tw.h2`
    text-primary-400
    font-bold 
    text-xl
`;

const Website = tw.a`
    text-secondary-300 
    italic 
    text-sm
`;

export default BarCard;
