import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Sandwich from "./components/Sandwich";
import BooksPage from "./components/BooksManager";

function App() {
    return (
        <>
            <Counter />
            <Sandwich />
            <BooksPage />
        </>
    );
}

export default App;
