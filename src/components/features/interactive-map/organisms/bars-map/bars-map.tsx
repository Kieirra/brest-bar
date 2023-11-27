"use client";

import dynamic from "next/dynamic";
import useBarsStore from "@/stores/bars-store";
import { Category } from "../../../../../../types/bar";

// We are forced to do this because leaflet is not compatible with vercel
// deployment. "window is not defined" error is thrown.
const BarsMapUI = dynamic(() => import("./bars-map-ui"), { ssr: false });

const BarsMap = ({ className = "" }) => {
    const { bars, position, category } = useBarsStore((state) => ({
        bars: state.bars,
        position: state.position,
        category: state.category,
    }));

    return (
        <BarsMapUI
            className={className}
            bars={bars.filter((a) => a.category === category || category === Category.ALL)}
            position={position}
        />
    );
};

export default BarsMap;
