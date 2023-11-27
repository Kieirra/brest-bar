"use client";

import { useEffect, useState } from "react";
import useBarsAPI from "@/components/features/explorer/organisms/explorer-panel/use-bars-api";
import BarList from "../bar-list/bar-list";
import DrinkCategories from "../../molecules/drink-categories";
import ExplorerHeader from "../../molecules/explorer-header";
import { Bar, Category } from "../../../../../../types/bar";
import useBarsStore from "@/stores/bars-store";
import { CloseButton } from "../../atoms/close-button";
import { ScrollablePanel } from "../../atoms/scrollable-panel";

const ExplorerPanel = ({ className = "" }) => {
    const { bars } = useBarsAPI();
    const { setBars, category, setCategory } = useBarsStore();

    useEffect(() => {
        setBars(bars);
    }, [bars]);

    return (
        <ExplorerPanelUI
            bars={bars}
            className={className}
            category={category}
            setCategory={setCategory}
        />
    );
};

interface ExplorerPanelUIProps {
    bars?: Bar[];
    className?: string;
    category?: Category;
    setCategory?: (category: Category) => void;
}

export const ExplorerPanelUI = ({
    bars = [] as Bar[],
    className = "",
    category = Category.ALL,
    setCategory,
}: ExplorerPanelUIProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const togglePanel = () => setIsOpen(!isOpen);

    return (
        <div className={className}>
            <div className="relative z-10 h-[calc(100vh-5rem)]">
                <ScrollablePanel className={isOpen ? "" : "-translate-x-full"}>
                    <CloseButton className="right-4" onClick={togglePanel} />
                    <ExplorerHeader className="pr-10" />
                    <DrinkCategories
                        className="border-y-2 border-ngrey-500"
                        onChangeCategory={setCategory}
                    />
                    <BarList bars={bars} category={category} />
                </ScrollablePanel>
                {!isOpen && <CloseButton className="left-4 -scale-x-100" onClick={togglePanel} />}
            </div>
        </div>
    );
};

export default ExplorerPanel;
