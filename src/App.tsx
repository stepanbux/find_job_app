import React, { useEffect } from "react";
import s from "./App.module.css";
import { SearchVacanciesPage } from "./pages/SearchVacanciesPage/SearchVacancyPage";
import { VacancyPage } from "./pages/VacancyPage/VacancyPage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { FavoritesVacanciesPage } from "./pages/FavoritesVacanciesPage/FavoritesVacanciesPage";
import { EmptyPage } from "./pages/EmptyPage/EmptyPage";
import { useAuthUserQuery, useGetCatalogQuery } from "./api/mainApi";
import { useAppDispatch } from "./store/redux-hooks";
import { setFavoriteVacancies } from "./store/slice";
import { Vacancy } from "./types/types";

function App() {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAuthUserQuery(null);

  useEffect(() => {
    if (!localStorage.getItem("favoriteVacancies")) {
      console.log("empty");
      localStorage.setItem("favoriteVacancies", JSON.stringify([]));
    }
    if (localStorage.getItem("favoriteVacancies")) {
      const favoriteVacancies: Vacancy[] = JSON.parse(
        localStorage.getItem("favoriteVacancies") || "[]"
      );
      dispatch(setFavoriteVacancies(favoriteVacancies));
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={s.wrapper}>
        <Header />
        <div className={s.content}>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        <Routes>
          <Route path="/" element={<SearchVacanciesPage />} />
          <Route path="/favorites" element={<FavoritesVacanciesPage />} />
          <Route path="/vacancy/:idOfVacancy" element={<VacancyPage />} />
          <Route path="/empty_page" element={<EmptyPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
