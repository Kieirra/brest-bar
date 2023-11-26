import { toTextOpeningHours } from "@/helpers/opening-hours";
import tw from "tailwind-styled-components";

const OpeningHours = ({
    openingHours,
    today = new Date(),
}: {
    openingHours?: string[];
    today?: Date;
}) => {
    if (!openingHours) {
        return <Text>Non disponible</Text>;
    }
    // Because sunday is 0 and not 6...
    const dayOfWeek = (today.getDay() + 6) % 7;
    const currentHour = today.getHours() as number;
    const textToDisplay = toTextOpeningHours(openingHours[dayOfWeek], currentHour);
    const isClosed = textToDisplay.includes("Fermé");
    const isNotAvailable = textToDisplay.includes("Non disponible");

    if (isNotAvailable) {
        return <Text>Non disponible</Text>;
    }

    return <Text className={isClosed ? "text-red-300" : "text-green-500"}>{textToDisplay}</Text>;
};

export default OpeningHours;

const Text = tw.span`
    italic 
    text-sm
    text-gray-300 
`;
