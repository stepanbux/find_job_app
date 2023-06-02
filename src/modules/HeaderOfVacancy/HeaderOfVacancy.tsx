import React, { FC, useCallback } from "react";
import s from "./HeaderOfVacancy.module.css";
import locationLogo from "../../assets/location.svg";
import emptyStar from "../../assets/emptyStar.svg";
import fullStar from "../../assets/fullStar.svg";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { NewVacancy } from "../../types/types";
import { setFavoriteVacancies } from "../../store/slice";

interface Props {
  data: NewVacancy;
}

export const HeaderOfVacancy: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const favoriteVacancies = useAppSelector(
    (state) => state.mainReducer.favoriteVacancies
  );

  const isFavoriteVacancy = favoriteVacancies.some(
    (item) => item.id === data.id
  );

  const onClick = useCallback(() => {
    let newVacancies = [] as NewVacancy[];

    if (isFavoriteVacancy) {
      newVacancies = favoriteVacancies.filter((item) => item.id !== data.id);
    }

    if (!isFavoriteVacancy) {
      newVacancies = [...favoriteVacancies, data];
    }

    dispatch(setFavoriteVacancies(newVacancies));
    localStorage.setItem("favoriteVacancies", JSON.stringify(newVacancies));
  }, [data, dispatch, favoriteVacancies, isFavoriteVacancy]);

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
        <img
          className={s.star}
          src={isFavoriteVacancy ? fullStar : emptyStar}
        />
      </button>
    </div>
  );
};
