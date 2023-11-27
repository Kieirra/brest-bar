import { Bar } from "../../../../../../types/bar";
import { useEffect, useState } from "react";

const useBarsAPI = () => {
    const [bars, setBars] = useState([] as Bar[]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/bars");
            const bars = await response.json();
            setBars(bars);
        };
        fetchData();
    }, []);

    return {
        bars,
    };
};

export default useBarsAPI;
