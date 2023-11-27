import { Category } from "../../../../../../types/bar";
import { getBarIcon } from "@/helpers/common";
import L, { LatLng } from "leaflet";

export const toLngLat = (point = [0, 0]) => {
    return new LatLng(point[0], point[1]);
};

export const getIcon = (category: Category) => {
    return L.divIcon({ html: getBarIcon(category) });
};

export const createClusterCustomIcon = function (cluster: any) {
    let size = "normal";
    let width = 45;
    let height = 45;
    if (cluster.getChildCount() > 45) {
        size = "huge";
        width = 65;
        height = 65;
    } else if (cluster.getChildCount() > 20) {
        size = "big";
        width = 55;
        height = 55;
    }

    return L.divIcon({
        html: `<span>${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster custom-marker-cluster-" + size,
        iconSize: L.point(width, height, true),
    });
};
