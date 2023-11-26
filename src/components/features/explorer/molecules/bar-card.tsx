import { Bar } from "../../../../../types/bar";
import Card from "@/components/common/atoms/card";
import { getBarIcon } from "@/helpers/common";
import tw from "tailwind-styled-components";
import Ratings from "../atoms/ratings";
import OpeningHours from "../atoms/opening-hours";

const BarCard = ({ bar }: { bar: Bar }) => {
    return (
        <Card className="max-w-lg">
            <Title>
                <span className="pr-2">{getBarIcon(bar.category)}</span> {bar.name}
            </Title>
            <div className="text-white text-sm mb-2">
                <Ratings rating={bar.rating} ratingCount={bar.ratingCount} /> -{" "}
                <OpeningHours openingHours={bar.openingHours} />
            </div>
            <div className="text-white mb-2">{bar.address}</div>
            <div className="flex flex-row space-x-8">
                {bar.website && (
                    <Contact href={bar.website} target="_blank" rel="noreferrer">
                        🗔 &nbsp; Site web
                    </Contact>
                )}
                <Contact href={`tel:${bar.phone}`}>☏ &nbsp; {bar.phone}</Contact>
            </div>
        </Card>
    );
};

const Title = tw.h2`
    text-primary-400
    font-bold 
    text-xl
`;

const Contact = tw.a`
    text-secondary-300 
`;

export default BarCard;
