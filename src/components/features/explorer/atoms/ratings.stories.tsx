import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import Ratings from "./ratings";

const meta: Meta<typeof Ratings> = {
    title: "features/explorer/atoms/Ratings",
    component: Ratings,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Ratings>;

export const Fill: Story = {
    args: {
        rating: 3,
        ratingCount: 10,
    },
};
