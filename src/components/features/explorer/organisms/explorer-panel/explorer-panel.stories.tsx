import type { Meta, StoryObj } from "@storybook/react";
import { ExplorerPanelUI } from "./explorer-panel";
import { Category } from "../../../../../../types/bar";

const meta: Meta<typeof ExplorerPanelUI> = {
    title: "features/explorer/organisms/ExplorerPanel",
    component: ExplorerPanelUI,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ExplorerPanelUI>;

export const Empty: Story = {
    args: {
        bars: [
            {
                name: "La Javanaise Bar Brest",
                address: "40 Quai de la Douane, 29200 Brest, France",
                website: "https://www.facebook.com/lajavanaise29200/",
                category: Category.BAR,
                rating: 3,
                ratingCount: 12,
                phone: "06 95 52 55 72",
            },
            {
                name: "La Javanaise Bar Brest",
                address: "40 Quai de la Douane, 29200 Brest, France",
                website: "https://www.facebook.com/lajavanaise29200/",
                category: Category.CAVE,
                rating: 4.3,
                ratingCount: 15,
                phone: "06 95 52 55 72",
            },
        ],
    },
};
