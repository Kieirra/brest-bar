import { Bar } from "../../../../../types/bar";
import Card from "@/components/common/atoms/card";
import { getBarIcon, getStars } from "@/helpers/common";
import tw from "tailwind-styled-components";
import Ratings from "../atoms/ratings";

const BarCard = ({ bar }: { bar: Bar }) => {
    return (
        <Card className="max-w-lg">
            <Title>
                <span className="pr-2">{getBarIcon(bar.category)}</span> {bar.name}
            </Title>
            <div className="text-white text-sm mb-2">
                <Ratings rating={bar.rating} ratingCount={bar.ratingCount} /> -{" "}
                <span className="text-red-300">Fermé à l'heure actuelle</span>
            </div>
            <div className="text-white">{bar.address}</div>
            <Website>{bar.website}</Website>
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
    text-xs
`;

export default BarCard;
