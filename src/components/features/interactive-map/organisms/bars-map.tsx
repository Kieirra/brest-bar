"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import LeafletImport from "../atoms/leaflet-import";
import { LatLng } from "leaflet";

const BarsMap = () => {
    const position = new LatLng(48.400002, -4.48333);
    const urlColor = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const urlGrey = "https://maps.omniscale.net/v2/{id}/style.grayscale/{z}/{x}/{y}.png";

    const attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

    return (
        <>
            <MapContainer
                className="w-screen h-screen"
                center={position}
                zoom={11}
            >
                <TileLayer url={urlColor} attribution={attribution} />
            </MapContainer>
            <LeafletImport />
        </>
    );
};

export default BarsMap;
