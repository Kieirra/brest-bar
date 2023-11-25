import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import Block from "./block";

const meta: Meta<typeof Block> = {
    title: "components/common/atoms/Block",
    component: Block,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Block>;

export const Empty: Story = {};
