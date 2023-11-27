import { create } from "zustand";
import { Bar, Category } from "../../types/bar";

interface BarsStore {
    bars: Bar[];
    position: [number, number];
    category: Category;
    setBars: (newBars: Bar[]) => void;
    setPosition: (newPosition: [number, number]) => void;
}

const useBarsStore = create<BarsStore>((set, get) => ({
    bars: [],
    position: [48.400002, -4.6],
    category: Category.ALL,
    setBars: (newBars: Bar[]) => set({ bars: newBars }),
    setPosition: (newPosition: [number, number]) => set({ position: newPosition }),
}));

export default useBarsStore;
