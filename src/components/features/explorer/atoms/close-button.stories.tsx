import type { Meta, StoryObj } from "@storybook/react";
import "tailwindcss/tailwind.css";
import { CloseButton } from "./close-button";

const meta: Meta<typeof CloseButton> = {
    title: "features/explorer/atoms/CloseButton",
    component: CloseButton,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Empty: Story = {
    decorators: [
        (Story) => (
            <div className="inline-block rounded-md bg-ngrey-800 p-10">
                <Story />
            </div>
        ),
    ],
};
