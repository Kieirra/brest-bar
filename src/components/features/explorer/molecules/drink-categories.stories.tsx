import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import DrinkCategories from "./drink-categories";

const meta: Meta<typeof DrinkCategories> = {
    title: "features/explorer/molecules/DrinkCategories",
    component: DrinkCategories,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DrinkCategories>;

export const Empty: Story = {};
