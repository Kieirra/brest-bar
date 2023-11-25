import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import BarCard from "./bar-card";

const meta: Meta<typeof BarCard> = {
    title: "features/explorer/molecules/BarCard",
    component: BarCard,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarCard>;

export const Fill: Story = {
    args: {
        item: {
            name: "La Javanaise Bar Brest",
            address: "40 Quai de la Douane, 29200 Brest, France",
            website: "https://www.facebook.com/lajavanaise29200/",
        },
    },
};
