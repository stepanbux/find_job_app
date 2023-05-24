import React from "react";
import s from "./ButtonsForHeader.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }: { isActive: boolean }): string =>
  isActive ? s.activeLink : s.default;

export const ButtonsForHeader = () => {
  return (
    <div className={s.buttons}>
      <NavLink className={setActive} to="/find_job_app">
        Поиск вакансий
      </NavLink>
      <NavLink className={setActive} to="/favorites">
        Избранное
      </NavLink>
    </div>
  );
};
