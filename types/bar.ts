export enum Category {
    CAVE = "cave",
    BRASSERIE = "brasserie",
    BAR = "bar",
    OTHER = "autre",
    ALL = "tous",
}

export interface Bar {
    name: string;
    address: string;
    website?: string;
    location?: [number, number];
    category?: Category;
    rating?: number;
    ratingCount?: number;
    openingHours?: string[];
    phone?: string;
}
