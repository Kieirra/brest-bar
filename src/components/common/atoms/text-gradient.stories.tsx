import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import TextGradient from "./text-gradient";

const meta: Meta<typeof TextGradient> = {
    title: "components/common/atoms/TextGradient",
    component: TextGradient,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextGradient>;

export const Empty: Story = {
    args: {
        children: "Hello World",
    },
};
