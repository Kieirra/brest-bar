"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import LeafletImport from "../../atoms/leaflet-import";
import { createClusterCustomIcon, getIcon, toLngLat } from "./helpers";
import { Bar } from "../../../../../../types/bar";
import { useEffect, useMemo, useRef } from "react";
import { Map } from "leaflet";
import BarMapPopup from "../../molecules/bar-map-popup";
import "./bars-map.css";

interface BarsMapProps {
    className?: string;
    bars?: Bar[];
    position?: [number, number];
}

const BarsMapUI = ({ className = "", bars = [], position = [48.400002, -4.6] }: BarsMapProps) => {
    const positionLngLat = toLngLat(position);
    const urlColor = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
    const map = useRef(null as Map | null);

    useEffect(() => {
        if (map.current) {
            map.current.flyTo(position, 18, {
                animate: true,
                duration: 0.5,
            });
        }
    }, [position]);

    const displayMap = useMemo(() => {
        return (
            <MapContainer
                className={`h-screen w-screen ${className}`}
                center={positionLngLat}
                zoom={12}
                ref={map}
            >
                <TileLayer url={urlColor} attribution={attribution} />
                <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon} chunkedLoading>
                    {bars.map((bar, index) => (
                        <Marker
                            position={toLngLat(bar.location)}
                            key={index}
                            icon={getIcon(bar.category!)}
                        >
                            <Popup className="leaflet-popup">
                                <BarMapPopup bar={bar} />
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        );
    }, [bars]);

    return (
        <div className="bg-ngrey-900">
            {displayMap}
            <LeafletImport />
        </div>
    );
};

export default BarsMapUI;
