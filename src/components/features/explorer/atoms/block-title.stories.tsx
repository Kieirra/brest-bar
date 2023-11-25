import type { Meta, StoryObj } from "@storybook/react";
import BlockTitle from "./block-title";

const meta: Meta<typeof BlockTitle> = {
    title: "features/explorer/atoms/Title",
    component: BlockTitle,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlockTitle>;

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
