import { Category } from "../../../types/bar";

export const getBarIcon = (category: Category) => {
    switch (category) {
        case Category.CAVE:
            return "🍷";
        case Category.BRASSERIE:
            return "🍺";
        case Category.BAR:
            return "🍹";
        default:
            return "🥂";
    }
};
