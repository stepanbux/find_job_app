import React from "react";
import s from "./ModuleForEmptyPage.module.css";
import image from "../../assets/imageForEmptyPage.svg";
import { useNavigate } from "react-router-dom";

export const ModuleForEmptyPage = () => {
  const navigate = useNavigate();

  const toHome = () => {
    return navigate("/");
  };
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={image} />
      <span className={s.title}>Упс, здесь еще ничего нет!</span>
      <button onClick={toHome} className={s.button}>
        Поиск Вакансий
      </button>
    </div>
  );
};
