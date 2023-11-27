import { create } from "zustand";
import { Bar, Category } from "../../types/bar";

interface BarsStore {
    bars: Bar[];
    loadedBars: Bar[];
    position: [number, number];
    category: Category;
    setBars: (newBars: Bar[]) => void;
    setLoadedBars: (newBars: Bar[]) => void;
    setPosition: (newPosition: [number, number]) => void;
    loadMoreBars: (count?: number) => void;
}

const useBarsStore = create<BarsStore>((set, get) => ({
    bars: [],
    loadedBars: [],
    position: [48.400002, -4.6],
    category: Category.ALL,
    setBars: (newBars: Bar[]) => set({ bars: newBars }),
    setLoadedBars: (newBars: Bar[]) => set({ loadedBars: newBars }),
    setPosition: (newPosition: [number, number]) => set({ position: newPosition }),
    loadMoreBars: (count = 5) => {
        const currentBars = get().loadedBars;
        const newBars = get().bars.slice(currentBars.length, currentBars.length + count);
        set({ loadedBars: [...currentBars, ...newBars] });
    },
}));

export default useBarsStore;
