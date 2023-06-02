import React, { FC } from "react";

import { useNavigate } from "react-router-dom";

import image from "../../assets/imageForEmptyPage.svg";

import s from "./ModuleForEmptyPage.module.css";

interface Props {
  isShowButton: boolean;
}

export const ModuleForEmptyPage: FC<Props> = ({ isShowButton }) => {
  const navigate = useNavigate();

  const toHome = () => {
    return navigate("/");
  };
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={image} />
      <span className={s.title}>Упс, здесь еще ничего нет!</span>
      {isShowButton && (
        <button onClick={toHome} className={s.button}>
          Поиск Вакансий
        </button>
      )}
    </div>
  );
};
