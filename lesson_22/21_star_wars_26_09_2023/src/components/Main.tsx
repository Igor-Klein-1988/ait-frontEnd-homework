import React, { useContext } from "react";
import Hero from "./Hero";
import Home from "./Home";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";

import { CurrentPageContext } from "../App";
import { navItems } from "../utils";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";

const Main: React.FC = (): JSX.Element => {
  const currentPage = useContext(CurrentPageContext);

  const getCurrentComponent = () => {
    switch (currentPage) {
      case navItems[0]:
        return <Home />;
      case navItems[1]:
        return <AboutMe />;
      case navItems[2]:
        return <StarWars />;
      case navItems[3]:
        return <Contact />;
    }
  };

  return (
    <main>
      {getCurrentComponent()}
      <Hero />
      <DreamTeam />
      <FarGalaxy />
    </main>
  );
};

export default Main;
