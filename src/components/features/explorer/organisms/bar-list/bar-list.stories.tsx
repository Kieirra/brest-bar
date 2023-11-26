import type { Meta, StoryObj } from "@storybook/react";
import { BarListUI } from "./bar-list";
import { Category } from "@/../types/bar";

const meta: Meta<typeof BarListUI> = {
    title: "features/explorer/organisms/BarList",
    component: BarListUI,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarListUI>;

export const Fill: Story = {
    args: {
        bars: [
            {
                name: "La Javanaise Bar Brest",
                address: "40 Quai de la Douane, 29200 Brest, France",
                website: "https://www.facebook.com/lajavanaise29200/",
                category: Category.BAR,
            },
            {
                name: "La Javanaise Bar Brest",
                address: "40 Quai de la Douane, 29200 Brest, France",
                website: "https://www.facebook.com/lajavanaise29200/",
                category: Category.CAVE,
            },
        ],
    },
};

export const Empty: Story = {
    args: {
        bars: [],
    },
};
