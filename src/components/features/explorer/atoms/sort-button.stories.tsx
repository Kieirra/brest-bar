import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import SortButton from "./sort-button";

const meta: Meta<typeof SortButton> = {
    title: "organisms/SortButton",
    component: SortButton,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SortButton>;

export const Empty: Story = {
    args: {
        children: "★ ↑",
    },
};
