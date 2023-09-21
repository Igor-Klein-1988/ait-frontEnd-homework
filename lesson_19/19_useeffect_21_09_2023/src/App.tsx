import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/Users/Users";

function App() {
    return (
        <>
            <Counter initialValue={100}/>
            <Users />
            {/* <Counter initialValue={0} />
            <Counter initialValue={10}/>

            <ClassComponent /> */}
        </>
    );
}

export default App;
