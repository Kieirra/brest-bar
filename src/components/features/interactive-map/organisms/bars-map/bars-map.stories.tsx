import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import BarsMap from "./bars-map";

const meta: Meta<typeof BarsMap> = {
    title: "features/interactive-map/organisms/BarsMap",
    component: BarsMap,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarsMap>;

export const Empty: Story = {};
