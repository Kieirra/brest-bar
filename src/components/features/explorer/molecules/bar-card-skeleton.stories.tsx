import type { Meta, StoryObj } from "@storybook/react";
import BarCardSkeleton from "./bar-card-skeleton";

const meta: Meta<typeof BarCardSkeleton> = {
    title: "features/explorer/atoms/BarCardSkeleton",
    component: BarCardSkeleton,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarCardSkeleton>;

export const Empty: Story = {};
