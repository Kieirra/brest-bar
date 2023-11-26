import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import OpeningHours from "./opening-hours";

const meta: Meta<typeof OpeningHours> = {
    title: "features/explorer/atoms/OpeningHours",
    component: OpeningHours,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OpeningHours>;

export const Open: Story = {
    args: {
        openingHours: [
            "lundi: Fermé",
            "mardi: Fermé",
            "mercredi: Fermé",
            "jeudi: Fermé",
            "vendredi: 22:00 - 04:00",
            "samedi: 22:00 - 04:00",
            "dimanche: Fermé",
        ],
        today: new Date("2021-09-17T22:00:00"),
    },
};

export const Closed: Story = {
    args: {
        openingHours: [
            "lundi: Fermé",
            "mardi: Fermé",
            "mercredi: Fermé",
            "jeudi: Fermé",
            "vendredi: 22:00 - 04:00",
            "samedi: 22:00 - 04:00",
            "dimanche: Fermé",
        ],
        today: new Date("2021-09-14T22:00:00"),
    },
};

export const ToLate: Story = {
    args: {
        openingHours: [
            "lundi: Fermé",
            "mardi: Fermé",
            "mercredi: Fermé",
            "jeudi: Fermé",
            "vendredi: 22:00 - 04:00",
            "samedi: 22:00 - 04:00",
            "dimanche: Fermé",
        ],
        today: new Date("2021-09-17T05:00:00"),
    },
};

