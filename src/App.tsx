import React, { useCallback, useEffect } from "react";
import s from "./App.module.css";
import { SearchVacanciesPage } from "./pages/SearchVacanciesPage/SearchVacancyPage";
import { VacancyPage } from "./pages/VacancyPage/VacancyPage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { FavoritesVacanciesPage } from "./pages/FavoriteVacanciesPage/FavoriteVacanciesPage";
import { useLazyAuthUserQuery } from "./api/mainApi";
import { useAppDispatch } from "./store/redux-hooks";
import { setFavoriteVacancies } from "./store/slice";
import { Preloader } from "./modules/Preloader/Preloader";
import { ModuleForEmptyPage } from "./modules/ModuleForEmptyPage/ModuleForEmptyPage";

function App() {
  const dispatch = useAppDispatch();
  const [getAuth, { data, isLoading, error }] = useLazyAuthUserQuery();

  const callAuthUser = useCallback(() => {
    getAuth();

    if (data) {
      localStorage.setItem("auth", JSON.stringify(data.ttl));
    }
  }, [data, getAuth]);

  useEffect(() => {
    const ttl = localStorage.getItem("auth");

    !ttl ? callAuthUser() : +ttl < Date.now() / 1000 && callAuthUser();

    const FV = localStorage.getItem("favoriteVacancies");
    const stringifiedFV = JSON.parse(FV || "[]");

    !FV
      ? localStorage.setItem("favoriteVacancies", JSON.stringify([]))
      : dispatch(setFavoriteVacancies(stringifiedFV));
  }, [callAuthUser, data, dispatch, getAuth]);

  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        {error && <ModuleForEmptyPage isShowButton/>}
        {isLoading && <Preloader />}
        {!error && (
          <Routes>
            <Route path="/" element={<SearchVacanciesPage />} />
            <Route path="/favorites" element={<FavoritesVacanciesPage />} />
            <Route path="/vacancy/:idOfVacancy" element={<VacancyPage />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
