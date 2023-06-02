import React from "react";

import { NavLink } from "react-router-dom";

import s from "./ButtonsForHeader.module.css";

const setActive = ({ isActive }: { isActive: boolean }): string =>
  isActive ? s.activeLink : s.default;

export const ButtonsForHeader = () => {
  return (
    <div className={s.buttons}>
      <NavLink className={setActive} to="/">
        Поиск вакансий
      </NavLink>
      <NavLink className={setActive} to="/favorites">
        Избранное
      </NavLink>
    </div>
  );
};
