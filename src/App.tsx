import React, { useEffect } from "react";
import s from "./App.module.css";
import { SearchVacanciesPage } from "./pages/SearchVacanciesPage/SearchVacancyPage";
import { VacancyPage } from "./pages/VacancyPage/VacancyPage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { FavoritesVacanciesPage } from "./pages/FavoriteVacanciesPage/FavoriteVacanciesPage";
import { EmptyPage } from "./pages/EmptyPage/EmptyPage";
import { useAuthUserQuery } from "./api/mainApi";
import { useAppDispatch } from "./store/redux-hooks";
import { setFavoriteVacancies } from "./store/slice";
import { NewVacancy } from "./types/types";
import { Preloader } from "./modules/Preloader/Preloader";

function App() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAuthUserQuery(null);

  useEffect(() => {
    if (!localStorage.getItem("favoriteVacancies")) {
      localStorage.setItem("favoriteVacancies", JSON.stringify([]));
    }
    if (localStorage.getItem("favoriteVacancies")) {
      const favoriteVacancies: NewVacancy[] = JSON.parse(
        localStorage.getItem("favoriteVacancies") || "[]"
      );
      dispatch(setFavoriteVacancies(favoriteVacancies));
    }
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        {error && <EmptyPage />}
        {isLoading && (
          <div>
            <Preloader />
          </div>
        )}
        {!isLoading && (
          <Routes>
            <Route path="/" element={<SearchVacanciesPage />} />
            <Route path="/favorites" element={<FavoritesVacanciesPage />} />
            <Route path="/vacancy/:idOfVacancy" element={<VacancyPage />} />
            <Route path="/empty_page" element={<EmptyPage />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
