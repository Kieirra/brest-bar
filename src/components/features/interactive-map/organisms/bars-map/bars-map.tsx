"use client";

import dynamic from "next/dynamic";
import useBarsStore from "@/stores/bars-store";
import { useEffect } from "react";

// We are forced to do this because leaflet is not compatible with vercel
// deployment. "window is not defined" error is thrown.
const BarsMapUI = dynamic(() => import("./bars-map-ui"), { ssr: false });

const BarsMap = ({ className = "" }) => {
    const { bars, position } = useBarsStore((state) => ({
        bars: state.bars,
        position: state.position,
    }));

    return <BarsMapUI className={className} bars={bars} position={position} />;
};

export default BarsMap;
