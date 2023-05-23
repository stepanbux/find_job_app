import React from "react";
import s from "./ModuleForEmptyPage.module.css";
import image from "../../assets/imageForEmptyPage.svg";

export const ModuleForEmptyPage = () => {
  return (
    <div className={s.wrapper}>
      <img src={image} />
      <span className={s.title}>Упс, здесь еще ничего нет!</span>
      <button className={s.button}>Поиск Вакансий</button>
    </div>
  );
};
