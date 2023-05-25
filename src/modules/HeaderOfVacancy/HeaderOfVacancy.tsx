import React, { FC, useCallback, useEffect, useState } from "react";
import s from "./HeaderOfVacancy.module.css";
import locationLogo from "../../assets/location.svg";
import emptyStar from "../../assets/star.svg";
import fullStar from "../../assets/fullStar.svg";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { NewVacancy } from "../../types/types";
import {
  setFavoriteVacancies,
  setPageForFavoriteVacancies,
} from "../../store/slice";

interface Props {
  data: NewVacancy;
}

export const HeaderOfVacancy: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [isStar, setIsStar] = useState(false);

  const favoriteVacancies = useAppSelector(
    (state) => state.mainReducer.favoriteVacancies
  );

  useEffect(() => {
    const isFavoriteVacancy = favoriteVacancies.some(
      (item) => item.id === data.id
    );
    setIsStar(isFavoriteVacancy);
  }, [favoriteVacancies, data.id]);

  const onClick = useCallback(() => {
    const isFavoriteVacancy = favoriteVacancies.some(
      (item) => item.id === data.id
    );
    setIsStar((prev) => !prev);

    const favoriteVacanciesFromLocalStore: NewVacancy[] = JSON.parse(
      localStorage.getItem("favoriteVacancies") || "[]"
    );

    if (isFavoriteVacancy) {
      const editFavoriteVacancy = favoriteVacanciesFromLocalStore.filter(
        (item) => item.id !== data.id
      );

      editFavoriteVacancy.length === 4 &&
        dispatch(setPageForFavoriteVacancies(1));

      localStorage.setItem(
        "favoriteVacancies",
        JSON.stringify(editFavoriteVacancy)
      );
    }

    if (!isFavoriteVacancy) {
      favoriteVacanciesFromLocalStore.push(data);
      localStorage.setItem(
        "favoriteVacancies",
        JSON.stringify(favoriteVacanciesFromLocalStore)
      );
    }

    const newFavoriteVacancies = JSON.parse(
      localStorage.getItem("favoriteVacancies") || "[]"
    );
    dispatch(setFavoriteVacancies(newFavoriteVacancies));
  }, [data, dispatch, favoriteVacancies]);

  return (
    <div className={s.wrapper}>
      <div className={s.vacancy}>
        <span className={s.vacancy_title}>{data.profession}</span>
        <div className={s.vacancy_information}>
          <span className={s.information_salary}>
            {data.payment_from > 0
              ? `з/п от ${data.payment_from} ${data.currency}`
              : data.payment_to > 0
              ? `з/п от ${data.payment_to} ${data.currency}`
              : "з/п по договоренности"}
          </span>
          <span className={s.information_dot}>•</span>
          <span className={s.information_condition}>{data.type_of_work}</span>
        </div>
        <div className={s.vacancy_location}>
          <img src={locationLogo} />
          <span className={s.location_city}>{data.town}</span>
        </div>
      </div>
      <button onClick={onClick} className={s.button}>
        <img className={s.star} src={isStar ? fullStar : emptyStar} />
      </button>
    </div>
  );
};
