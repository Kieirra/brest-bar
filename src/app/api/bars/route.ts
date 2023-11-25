import { NextResponse } from "next/server";

export enum Category {
    CAVE = "cave",
    BRASSERIE = "brasserie",
    BAR = "bar",
    OTHER = "autre",
}

export interface Bar {
    name: string;
    address: string;
    website: string;
    location: number[];
    category: Category;
}

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
    })) as Bar[];

    return NextResponse.json(bars);
};

const getCategory = (name: string) => {
    const regexVinCave = /vin|cave/i;
    const regexBrasserie = /brasserie/i;
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
