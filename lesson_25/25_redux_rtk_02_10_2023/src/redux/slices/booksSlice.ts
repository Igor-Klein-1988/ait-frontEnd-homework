import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, BooksState } from "../types/State";
import { uid } from "uid";

const initialState: BooksState = {
  books: [
    { isbn: "1", title: "Harry Potter", author: "J.Rouling", year: 2002 },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    add: (state, action: PayloadAction<Book>) => {
      const newBook = { ...action.payload, isbn: uid() };
      state.books.push(newBook);
    },

    delete: (state, action: PayloadAction<string>) => {
      const newBooks = state.books.filter(
        (book) => book.isbn !== action.payload
      );
      state.books = newBooks;
    },

    editTitle: (
      state,
      action: PayloadAction<{ isbn: string; title: string }>
    ) => {
      state.books.map((book) => {
        if (book.isbn === action.payload.isbn) {
          book.title = action.payload.title;
        }

        return book;
      });
    },
  },
});

export const { add } = booksSlice.actions;

export default booksSlice.reducer;
