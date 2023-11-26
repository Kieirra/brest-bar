import { NextResponse } from "next/server";
import { Bar, Category } from "../../../../types/bar";

export const GET = async (request: Request) => {
    const response = await fetch("https://api.brest.bar/items/bars");
    const json = await response.json();

    const bars = json.data.map((bar: any) => ({
        name: bar.name,
        address: bar.address,
        website: bar.website,
        // we need to reverse the coordinates because the API returns them in the wrong order
        location: [bar.location?.coordinates[1], bar.location?.coordinates[0]],
        category: getCategory(bar.name),
        rating: bar.rating,
        ratingCount: bar.user_ratings_total,
        openingHours: getOpeningHours(bar.opening_hours.replaceAll(" – ", " - ")),
    })) as Bar[];

    return NextResponse.json(bars);
};

const getCategory = (name: string) => {
    const regexVinCave = /vin|cave/i;
    const regexBrasserie = /brasserie|beer/i;
    const regexBar = /bar|bistro|pub/i;
    if (regexVinCave.test(name)) {
        return Category.CAVE;
    } else if (regexBrasserie.test(name)) {
        return Category.BRASSERIE;
    } else if (regexBar.test(name)) {
        return Category.BAR;
    } else {
        return Category.OTHER;
    }
};

const getOpeningHours = (openingHours: string) => {
    if (!openingHours || openingHours === "null") return [];;
    const openingHoursObject = JSON.parse(openingHours);
    const openingHoursArray = Object.values(openingHoursObject);
    return openingHoursArray;
};
