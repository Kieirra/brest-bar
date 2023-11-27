"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useBarsAPI from "@/components/features/explorer/organisms/explorer-panel/use-bars-api";
import BarList from "../bar-list/bar-list";
import DrinkCategories from "../../molecules/drink-categories";
import ExplorerHeader from "../../molecules/explorer-header";
import { Bar, Category } from "../../../../../../types/bar";
import useBarsStore from "@/stores/bars-store";
import tw from "tailwind-styled-components";

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
            <div className="relative h-[calc(100vh-5rem)] z-10">
                <ScrollablePanel className={isOpen ? "" : "-translate-x-full"}>
                    <CloseButton className="right-4" onClick={togglePanel}>
                        <Image
                            src="/images/open-close.svg"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                    </CloseButton>
                    <ExplorerHeader className="pr-10" />
                    <DrinkCategories
                        className="border-ngrey-500 border-y-2"
                        onChangeCategory={setCategory}
                    />
                    <BarList bars={bars} category={category} />
                </ScrollablePanel>
                {!isOpen && (
                    <CloseButton className="left-4 -scale-x-100" onClick={togglePanel}>
                        <Image
                            src="/images/open-close.svg"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                    </CloseButton>
                )}
            </div>
        </div>
    );
};

const CloseButton = tw.button`
    absolute 
    top-12
    -translate-y-1/2
    transition-all
`;

const ScrollablePanel = tw.div`
    inline-block 
    h-full
    overflow-y-auto 
    scrollbar-thin 
    scrollbar-thumb-primary-500 
    scrollbar-track-ngrey-900
    transition-all
`;

export default ExplorerPanel;
