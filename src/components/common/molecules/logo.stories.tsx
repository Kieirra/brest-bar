import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./logo";

const meta: Meta<typeof Logo> = {
    title: "components/common/molecules/Logo",
    component: Logo,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Empty: Story = {
    decorators: [
        (Story) => (
            <div className="inline-block bg-ngrey-900 p-4">
                <Story />
            </div>
        ),
    ],
};
