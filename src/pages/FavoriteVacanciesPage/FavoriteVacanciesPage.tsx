import React, { ChangeEvent } from "react";

import { VacancyList } from "../../modules/VacancyList/VacancyList";

import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { PaginationComponent } from "../../modules/Pagination/Pagination";
import { setPageForFavoriteVacancies } from "../../store/slice";
import { ModuleForEmptyPage } from "../../modules/ModuleForEmptyPage/ModuleForEmptyPage";

import s from "./FavoriteVacanciesPage.module.css";

export const FavoritesVacanciesPage = () => {
  const page = useAppSelector(
    (state) => state.mainReducer.pageForFavoriteVacancies
  );
  const dispatch = useAppDispatch();
  const favoriteVacancies = useAppSelector(
    (state) => state.mainReducer.favoriteVacancies
  );

  const count =
    favoriteVacancies.length / 4 > 125
      ? 125
      : Math.ceil(favoriteVacancies.length / 4);

  const startIndex = (page - 1) * 4;

  const arrayForEachPageOfFavoriteVacancies = favoriteVacancies.slice(
    startIndex,
    startIndex + 4
  );

  const onChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setPageForFavoriteVacancies(page));
  };

  return (
    <div className={s.wrapper}>
      {favoriteVacancies.length === 0 ? (
        <ModuleForEmptyPage isShowButton/>
      ) : (
        <>
          <div className={s.wrapperVacancyList}>
            <VacancyList
              isFetching={false}
              data={arrayForEachPageOfFavoriteVacancies}
            />
          </div>
          <PaginationComponent count={count} page={page} onChange={onChange} />
        </>
      )}
    </div>
  );
};
