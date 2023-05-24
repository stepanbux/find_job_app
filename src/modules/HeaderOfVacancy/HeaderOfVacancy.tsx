import React, { FC, useCallback, useEffect, useState } from "react";
import s from "./HeaderOfVacancy.module.css";
import locationLogo from "../../assets/location.svg";
import emptyStar from "../../assets/star.svg";
import fullStar from "../../assets/fullStar.svg";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { NewVacancy } from "../../types/types";
import { setFavoriteVacancies } from "../../store/slice";

interface Props {
  id: number;
  title: string;
  salary: string;
  condition: string;
  location: string;
  data: NewVacancy;
}

export const HeaderOfVacancy: FC<Props> = ({
  id,
  title,
  salary,
  condition,
  location,
  data
}) => {
  // const onClick = useCallback(() => {
  //   setIsStar((prev) => !prev);
  // }, []);

  const dispatch = useAppDispatch();
  const [isStar, setIsStar] = useState(false);

  const favoriteVacancies = useAppSelector(
    (state) => state.mainReducer.favoriteVacancies
  );

  useEffect(() => {
    const isFavoriteVacancy = favoriteVacancies.some((item) => item.id === data.id);
    setIsStar(isFavoriteVacancy);
  }, [favoriteVacancies, data.id]);

  const onClick = useCallback(() => {
    const isFavoriteVacancy = favoriteVacancies.some((item) => item.id === data.id);
    setIsStar((prev) => !prev);
    const favoriteVacanciesFromLocalStore: NewVacancy[] = JSON.parse(
      localStorage.getItem("favoriteVacancies") || "[]"
    );

    if (isFavoriteVacancy) {
      const editFavoriteVacancy = favoriteVacanciesFromLocalStore.filter(
        (item) => item.id !== data.id
      );
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
        <span className={s.vacancy_title}>{title}</span>
        <div className={s.vacancy_information}>
          <span className={s.information_salary}>з/п от {salary}</span>
          <span className={s.information_dot}>•</span>
          <span className={s.information_condition}>{condition}</span>
        </div>
        <div className={s.vacancy_location}>
          <img src={locationLogo} />
          <span className={s.location_city}>{location}</span>
        </div>
      </div>
      <button onClick={onClick} className={s.button}>
        <img className={s.star} src={isStar ? fullStar : emptyStar} />
      </button>
    </div>
  );
};
