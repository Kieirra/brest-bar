import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import Card from "./card";

const meta: Meta<typeof Card> = {
    title: "components/common/atoms/Card",
    component: Card,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Empty: Story = {
    decorators: [
        (Story) => (
            <div className="inline-block bg-ngrey-900 p-4">
                <Story />
            </div>
        ),
    ],
};
