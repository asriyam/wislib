

export interface Book {
    "id": string;
    "title": string;
    "author": string;
    "isbn": string;
    "published_date": string;
    "publisher": string;
    "genre": string;
    "pages": number;
    "language": string;
    "available_copies": number;
    "total_copies": number;
    "location": string;
}

export enum SortDirection {
    Asc,
    Desc,
    None
}

export interface SortState {
    column: keyof Book | '';
    direction: SortDirection;
}