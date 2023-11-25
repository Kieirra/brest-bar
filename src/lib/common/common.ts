import { Category } from "@/app/api/bars/route";

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
