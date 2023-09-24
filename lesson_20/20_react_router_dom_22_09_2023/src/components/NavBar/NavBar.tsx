import React, { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

import style from "./NavBar.module.css";

const NavBar: FC = () => {
  return (
    <>
      <nav className={style.navigation}>
        <ul className={style.list}>
          <li className={style.listElement}>
            <NavLink className={style.link} to="/">
              Users
            </NavLink>
          </li>
          <li className={style.listElement}>
            <NavLink className={style.link} to="/posts">
              Posts
            </NavLink>
          </li>
          <li className={style.listElement}>
            <NavLink className={style.link} to="/comments">
              Comments
            </NavLink>
          </li>
          <li className={style.listElement}>
            <NavLink className={style.link} to="/todo">
              Todo
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
