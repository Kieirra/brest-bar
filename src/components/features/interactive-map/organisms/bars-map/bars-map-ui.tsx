"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import LeafletImport from "../../atoms/leaflet-import";
import { createClusterCustomIcon, getIcon, toLngLat } from "./helpers";
import "./bars-map.css";
import { Bar } from "../../../../../../types/bar";

interface BarsMapProps {
    className?: string;
    bars?: Bar[];
}

const BarsMapUI = ({ className = "", bars = [] }: BarsMapProps) => {
    const position = new LatLng(48.400002, -4.6);
    const urlColor = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

    return (
        <div className="bg-ngrey-900">
            <MapContainer className={`w-screen h-screen ${className}`} center={position} zoom={12}>
                <TileLayer url={urlColor} attribution={attribution} />
                <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon} chunkedLoading>
                    {bars.map((bar, index) => (
                        <Marker
                            position={toLngLat(bar.location)}
                            key={index}
                            icon={getIcon(bar.category!)}
                        >
                            <Popup>
                                <h2>{bar.name}</h2>
                                <p>{bar.address}</p>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
            <LeafletImport />
        </div>
    );
};

export default BarsMapUI;
