import React from "react";
import { VacancyList } from "../../modules/VacancyList/VacancyList";
import s from "./FavoriteVacanciesPage.module.css";
import { useAppSelector } from "../../store/redux-hooks";
import { EmptyPage } from "../EmptyPage/EmptyPage";

export const FavoritesVacanciesPage = () => {
  const favoriteVacancies = useAppSelector(
    (state) => state.mainReducer.favoriteVacancies
  );

  return (
    <>
      {favoriteVacancies.length === 0 && <EmptyPage />}
      <div className={s.wrapper}>
        <VacancyList data={favoriteVacancies} />
      </div>
    </>
  );
};
