import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { navItems } from "./utils";

export const PageContext = createContext((currentPage: string) => {});
export const CurrentPageContext = createContext<string>("");
//(alias) createContext<unknown>(defaultValue: unknown): React.Context<unknown> import createContext Expected 1 arguments, but got 0.

function App() {
  const [currentPage, setCurrentPage] = useState<string>(navItems[0]);

  console.log(currentPage);

  const changePage = (currentPage: string) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <PageContext.Provider value={changePage}>
        <Header changePage={changePage} />
        <CurrentPageContext.Provider value={currentPage}>
          <Main />
        </CurrentPageContext.Provider>
        <Footer />
      </PageContext.Provider>
    </>
  );
}

export default App;
