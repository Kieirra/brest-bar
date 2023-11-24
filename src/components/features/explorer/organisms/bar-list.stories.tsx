import type { Meta, StoryObj } from "@storybook/react";
import BarList from "./bar-list";

const meta: Meta<typeof BarList> = {
    title: "features/explorer/organisms/BarList",
    component: BarList,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarList>;

export const Empty: Story = {
    args: {
        items: [
            {
                name: "La Javanaise Bar Brest",
                address: "40 Quai de la Douane, 29200 Brest, France",
                website: "https://www.facebook.com/lajavanaise29200/",
            },
            {
                name: "La Javanaise Bar Brest",
                address: "40 Quai de la Douane, 29200 Brest, France",
                website: "https://www.facebook.com/lajavanaise29200/",
            },
        ],
    },
};
