import { Bar, Category } from "../../../../../../types/bar";

export const filterByCategory = (category: string) => (bar: Bar) => {
    return bar.category === category || category === Category.ALL;
};

export enum SortBy {
    HIGH_STARS = "high_stars",
    LOW_STARS = "low_stars",
    NONE = "none",
}

export const sortByStars = (sortBy: SortBy) => (a: Bar, b: Bar) => {
    const aRating = a.rating ? a.rating : -Infinity;
    const bRating = b.rating ? b.rating : -Infinity;

    if (sortBy === SortBy.HIGH_STARS) {
        return bRating - aRating;
    } else if (sortBy === SortBy.LOW_STARS) {
        return aRating - bRating;
    } else {
        return 0;
    }
};
