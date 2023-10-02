import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import sandwichSlice from "./slices/sandwichSlice";
import booksSlice from "./slices/booksSlice";

export const storeRTK = configureStore({
    reducer: {
        counter: counterSlice,
        sandwich: sandwichSlice,
        books: booksSlice
    }
})

export type RootState = ReturnType<typeof storeRTK.getState>;
export type AppDispatch = typeof storeRTK.dispatch