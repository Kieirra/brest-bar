import { NextResponse } from "next/server";

export interface Bar {
    name: string;
    address: string;
    website: string;
}

export const GET = async (request: Request) => {
    const response = await fetch("https://api.brest.bar/items/bars");
    const json = await response.json();
    const bars = json.data.map((bar: any) => ({
        name: bar.name,
        address: bar.address,
        website: bar.website,
    })) as Bar[];

    return NextResponse.json(bars);
};
