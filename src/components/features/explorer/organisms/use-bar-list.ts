import { useEffect, useState } from "react";

const useBarList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/bars");
            const data = await response.json();
            setItems(data);
        };
        fetchData();
    }, []);

    return {
        items,
    };
};

export default useBarList;
