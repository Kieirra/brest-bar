import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import { ScrollablePanel } from "./scrollable-panel";

const meta: Meta<typeof ScrollablePanel> = {
    title: "features/explorer/atoms/ScrollablePanel",
    component: ScrollablePanel,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ScrollablePanel>;

export const Empty: Story = {
    args: {
        children: (
            <div>
                <div className="h-screen bg-ngrey-700 p-44 text-white">Element</div>
                <div className="h-screen bg-ngrey-700 p-44 text-white">Element</div>
                <div className="h-screen bg-ngrey-700 p-44 text-white">Element</div>
            </div>
        ),
    },
    decorators: [
        (Story) => (
            <div className="h-screen overflow-hidden">
                <Story />
            </div>
        ),
    ],
};
