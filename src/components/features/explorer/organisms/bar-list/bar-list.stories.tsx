import type { Meta, StoryObj } from "@storybook/react";
import BarList from "./bar-list";
import { Category } from "@/../types/bar";

const meta: Meta<typeof BarList> = {
    title: "features/explorer/organisms/BarList",
    component: BarList,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarList>;

export const Fill: Story = {
    args: {
        bars: [
            {
                name: "La Javanaise Bar Brest",
                address: "40 Quai de la Douane, 29200 Brest, France",
                website: "https://www.facebook.com/lajavanaise29200/",
                category: Category.BAR,
                rating: 3,
                ratingCount: 12,
                phone: "06 95 52 55 72",
            },
            {
                name: "La Javanaise Bar Brest",
                address: "40 Quai de la Douane, 29200 Brest, France",
                website: "https://www.facebook.com/lajavanaise29200/",
                category: Category.CAVE,
                rating: 4.3,
                ratingCount: 15,
                phone: "06 95 52 55 72",
            },
        ],
    },
};

export const Empty: Story = {
    args: {
        bars: [],
    },
};
