import React from "react";
import { Title } from "../../../../UI/Titles/TitleForVacancySearch/TitleForVacancySearch";
import s from "./MainTitleForSearch.module.css";
import cross from "../../../../assets/cross.svg";
import { useAppDispatch } from "../../../../store/redux-hooks";
import {
  setPaymentFrom,
  setPaymentTo,
  setSelectedIndustry,
} from "../../../../store/slice";

export const MainTitleForSearch = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(setSelectedIndustry(0));
    dispatch(setPaymentFrom(0));
    dispatch(setPaymentTo(0));
  };

  return (
    <div className={s.title}>
      <Title size={20} title={"Фильтры"} />
      <button type="reset" className={s.button} onClick={onClick}>
        Сбросить все <img src={cross} />
      </button>
    </div>
  );
};
