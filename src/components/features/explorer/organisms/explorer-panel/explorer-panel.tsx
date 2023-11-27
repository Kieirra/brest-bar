"use client";

import { useEffect, useState } from "react";
import useBarsAPI from "@/components/features/explorer/organisms/explorer-panel/use-bars-api";
import BarList from "../../molecules/bar-list";
import DrinkCategories from "../../molecules/drink-categories";
import ExplorerTitle from "../../molecules/explorer-title";
import { Bar, Category } from "../../../../../../types/bar";
import useBarsStore from "@/stores/bars-store";

const ExplorerPanel = ({ className = "" }) => {
    const { bars } = useBarsAPI();
    const { setBars, loadMoreBars, setLoadedBars, loadedBars } = useBarsStore();

    useEffect(() => {
        setBars(bars);
        setLoadedBars(bars.slice(0, 5));
    }, [bars]);

    return <ExplorerPanelUI bars={loadedBars} className={className} loadMoreBars={loadMoreBars} />;
};

export const ExplorerPanelUI = ({
    bars = [] as Bar[],
    className = "",
    loadMoreBars,
}: ExplorerPanelUIProps) => {
    const [category, setCategory] = useState(Category.ALL);
    const onChangeCategory = (newCategory: Category) => {
        setCategory(newCategory);
    };

    return (
        <div
            className={`inline-block z-10 overflow-y-auto h-[calc(100vh-5rem)] scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-ngrey-900 ${className}`}
        >
            <ExplorerTitle />
            <DrinkCategories
                className="border-ngrey-500 border-y-2"
                onChangeCategory={onChangeCategory}
            />
            <BarList bars={bars} loadMoreBars={loadMoreBars} category={category} />
        </div>
    );
};

interface ExplorerPanelUIProps {
    bars: Bar[];
    className?: string;
    loadMoreBars?: CallableFunction;
}

export default ExplorerPanel;
