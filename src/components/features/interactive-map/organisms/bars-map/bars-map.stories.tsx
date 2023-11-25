import type { Meta, StoryObj } from "@storybook/react";
import { BarsMapUI } from "./bars-map";
import { Category } from "@/app/api/bars/route";

const meta: Meta<typeof BarsMapUI> = {
    title: "features/interactive-map/organisms/BarsMap",
    component: BarsMapUI,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarsMapUI>;

export const MultipleBar: Story = {
    args: {
        bars: [
            {
                name: "Bar 1",
                address: "Address 1",
                location: [48.400002, -4.6],
                website: "https://www.google.com",
                category: Category.BAR,
            },
            {
                name: "Bar 2",
                address: "Address 1",
                location: [48.385, -4.5],
                website: "https://www.google.com",
                category: Category.BAR,
            },
            {
                name: "Bar 3",
                address: "Address 1",
                location: [48.400002, -4.5],
                website: "https://www.google.com",
                category: Category.BAR,
            },
        ],
    },
};

export const OneBar: Story = {
    args: {
        bars: [
            {
                name: "Bar 1",
                address: "Address 1",
                location: [48.400002, -4.6],
                website: "https://www.google.com",
                category: Category.BAR,
            },
        ],
    },
};

export const Empty: Story = {};
