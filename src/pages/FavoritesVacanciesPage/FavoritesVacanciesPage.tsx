import React, { useEffect } from "react";
import { VacancyList } from "../../modules/VacancyList/VacancyList";
import s from "./FavoritesVacanciesPage.module.css";
import { Vacancy } from "../../types/types";
import { useAppSelector } from "../../store/redux-hooks";

export const FavoritesVacanciesPage = () => {
  // const { data, isLoading, error } = useGetDefaultVacanciesQuery(null, {});
  // if (isLoading) return <div>loading...</div>;
  // else {
  // let favoriteVacancies: Vacancy[] = [];
  // useEffect(() => {
  //   favoriteVacancies = JSON.parse(
  //     localStorage.getItem("favoriteVacancies") || "[]"
  //   );
  // }, []);
  const favoriteVacancies = useAppSelector(
    (state) => state.mainReducer.favoriteVacancies
  );
  return (
    <div className={s.wrapper}>
      <VacancyList data={favoriteVacancies} />
    </div>
  );
};
