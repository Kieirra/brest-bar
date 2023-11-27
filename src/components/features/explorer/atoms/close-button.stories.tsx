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
    args: {
        children: (
            <img src="/images/open-close.svg" width={40} height={40} alt="Picture of the author" />
        ),
    },
    decorators: [
        (Story) => (
            <div className="inline-block rounded-md bg-ngrey-800 p-10">
                <Story />
            </div>
        ),
    ],
};
