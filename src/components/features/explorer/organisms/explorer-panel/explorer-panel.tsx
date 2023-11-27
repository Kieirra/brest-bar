"use client";

import { useEffect } from "react";
import useBarsAPI from "@/components/features/explorer/organisms/explorer-panel/use-bars-api";
import BarList from "../../molecules/bar-list/bar-list";
import DrinkCategories from "../../molecules/drink-categories";
import ExplorerHeader from "../../molecules/explorer-header";
import { Bar, Category } from "../../../../../../types/bar";
import useBarsStore from "@/stores/bars-store";

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

export const ExplorerPanelUI = ({
    bars = [] as Bar[],
    className = "",
    category = Category.ALL,
    setCategory,
}: ExplorerPanelUIProps) => {
    return (
        <div
            className={`inline-block z-10 overflow-y-auto h-[calc(100vh-5rem)] scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-ngrey-900 ${className}`}
        >
            <ExplorerHeader />
            <DrinkCategories
                className="border-ngrey-500 border-y-2"
                onChangeCategory={setCategory}
            />
            <BarList bars={bars} category={category} />
        </div>
    );
};

interface ExplorerPanelUIProps {
    bars?: Bar[];
    className?: string;
    category?: Category;
    setCategory?: (category: Category) => void;
}

export default ExplorerPanel;
