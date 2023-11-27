import { Bar } from "../../../../../types/bar";
import Card from "@/components/common/atoms/card";
import { getBarIcon } from "@/helpers/common";
import tw from "tailwind-styled-components";
import Ratings from "../atoms/ratings";
import OpeningHours from "../atoms/opening-hours";
import useBarsStore from "@/stores/bars-store";

const BarCard = ({ bar }: { bar: Bar }) => {
    const setPosition = useBarsStore((state) => state.setPosition);

    return (
        <Card
            className="max-w-lg transition-all hover:cursor-pointer hover:bg-ngrey-900"
            onClick={() => {
                setPosition(bar.location!);
                console.log(bar.location);
            }}
        >
            <Title>
                <span className="pr-2">{getBarIcon(bar.category)}</span> {bar.name}
            </Title>
            <div className="mb-2 text-sm text-white">
                <Ratings rating={bar.rating} ratingCount={bar.ratingCount} /> -{" "}
                <OpeningHours openingHours={bar.openingHours} />
            </div>
            <div className="mb-2 text-white">{bar.address}</div>
            <div className="flex flex-row space-x-8">
                {bar.website && (
                    <Contact
                        href={bar.website}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e: any) => e.stopPropagation()}
                    >
                        🗔 &nbsp; Site web
                    </Contact>
                )}
                {bar.phone && (
                    <Contact href={`tel:${bar.phone}`} onClick={(e: any) => e.stopPropagation()}>
                        ☏ &nbsp; {bar.phone}
                    </Contact>
                )}
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
    hover:text-accent-500
    transition-all
`;

export default BarCard;
