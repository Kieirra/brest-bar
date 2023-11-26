export enum Category {
    CAVE = "cave",
    BRASSERIE = "brasserie",
    BAR = "bar",
    OTHER = "autre",
}

export interface Bar {
    name: string;
    address: string;
    website?: string;
    location?: number[];
    category?: Category;
    rating?: number;
    ratingCount?: number;
    openingHours?: string[];
}
