import { Bar, Category } from "../../types/bar";

export const getBarIcon = (category?: Category) => {
    switch (category) {
        case Category.CAVE:
            return "🍷";
        case Category.BRASSERIE:
            return "🍺";
        case Category.BAR:
            return "🍹";
        case Category.ALL:
            return "🍸";
        default:
            return "🥂";
    }
};

export const getStars = (rating = 0) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating - 0.5) {
            stars.push("★");
        } else {
            stars.push("✩");
        }
    }
    return stars;
};
