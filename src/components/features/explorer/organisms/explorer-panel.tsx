"use client";

import useBarsAPI from "@/hooks/use-bars-api";
import BarList from "../molecules/bar-list";
import DrinkCategories from "../molecules/drink-categories";
import ExplorerTitle from "../molecules/explorer-title";
import { Bar } from "../../../../../types/bar";

const ExplorerPanel = ({ className = "" }) => {
    const { bars } = useBarsAPI();
    return <ExplorerPanelUI bars={bars} className={className} />;
};

export const ExplorerPanelUI = ({ bars = [] as Bar[], className = "" }) => {
    return (
        <div
            className={`inline-block z-10 overflow-y-auto h-[calc(100vh-5rem)] scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-ngrey-900 ${className}`}
        >
            <ExplorerTitle />
            <DrinkCategories className="border-ngrey-500 border-y-2" />
            <BarList bars={bars} />
        </div>
    );
};

export default ExplorerPanel;
