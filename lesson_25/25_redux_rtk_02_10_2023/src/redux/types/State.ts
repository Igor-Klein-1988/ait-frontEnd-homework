export interface CounterState {
    value: number;
}

export interface SandwichState {
    ingredients: string;
}

export interface Book {
    isbn: string;
    title: string;
    year: number;
    author: string;
}

export interface BooksState {
    books: Book[];
}