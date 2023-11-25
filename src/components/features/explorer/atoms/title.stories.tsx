import type { Meta, StoryObj } from "@storybook/react";
import Title from "./title";

const meta: Meta<typeof Title> = {
    title: "features/explorer/atoms/Title",
    component: Title,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Empty: Story = {
    args: {
        children: "Explorer",
    },
    decorators: [
        (Story) => {
            return (
                <div className="bg-ngrey-800 p-2">
                    <Story />
                </div>
            );
        },
    ],
};
