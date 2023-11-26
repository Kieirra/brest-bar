"use client";

import dynamic from "next/dynamic";
import useBarsAPI from "@/hooks/use-bars-api";

// We are forced to do this because leaflet is not compatible with vercel
// deployment. "window is not defined" error is thrown.
const BarsMapUI = dynamic(() => import("./bars-map-ui"), { ssr: false });

const BarsMap = ({ className = "" }) => {
    const { bars } = useBarsAPI();
    return <BarsMapUI className={className} bars={bars} />;
};

export default BarsMap;
