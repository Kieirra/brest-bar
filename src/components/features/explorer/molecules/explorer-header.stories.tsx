import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import ExplorerHeader from "./explorer-header";

const meta: Meta<typeof ExplorerHeader> = {
    title: "features/explorer/molecules/ExplorerHeader",
    component: ExplorerHeader,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ExplorerHeader>;

export const Empty: Story = {};
