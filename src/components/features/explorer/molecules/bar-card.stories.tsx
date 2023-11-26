import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import BarCard from "./bar-card";
import { Category } from "../../../../../types/bar";

const meta: Meta<typeof BarCard> = {
    title: "features/explorer/molecules/BarCard",
    component: BarCard,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarCard>;

export const Fill: Story = {
    args: {
        bar: {
            name: "La Javanaise Bar Brest",
            address: "40 Quai de la Douane, 29200 Brest, France",
            website: "https://www.facebook.com/lajavanaise29200/",
            category: Category.BAR,
            rating: 4.3,
            ratingCount: 12,
            openingHours: [
                "lundi: Fermé",
                "mardi: Fermé",
                "mercredi: Fermé",
                "jeudi: Fermé",
                "vendredi: 22:00 - 04:00",
                "samedi: 22:00 - 04:00",
                "dimanche: Fermé",
            ],
        },
    },
};
