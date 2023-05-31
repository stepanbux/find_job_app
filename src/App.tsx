import React, { useCallback, useEffect } from "react";
import s from "./App.module.css";
import { SearchVacanciesPage } from "./pages/SearchVacanciesPage/SearchVacancyPage";
import { VacancyPage } from "./pages/VacancyPage/VacancyPage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { FavoritesVacanciesPage } from "./pages/FavoriteVacanciesPage/FavoriteVacanciesPage";
import { EmptyPage } from "./pages/EmptyPage/EmptyPage";
import { useLazyAuthUserQuery } from "./api/mainApi";
import { useAppDispatch, useAppSelector } from "./store/redux-hooks";
import { setAuth, setFavoriteVacancies } from "./store/slice";
import { Preloader } from "./modules/Preloader/Preloader";

function App() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.mainReducer.auth);
  const [getAuth, { data, isLoading, error }] = useLazyAuthUserQuery();

  const callAuthUser = useCallback(() => {
    getAuth();
    
    if (data) {
      dispatch(setAuth(data.ttl));
      localStorage.setItem("auth", JSON.stringify(data.ttl));
    }
  }, [data, dispatch, getAuth]);

  const pushAuthInLocalStorage = useCallback(() => {
    auth === 0
      ? dispatch(setAuth(JSON.parse(localStorage.getItem("auth") || "0")))
      : callAuthUser();
  }, [auth, callAuthUser, dispatch]);

  useEffect(() => {
    const hasTtl = localStorage.getItem("auth");

    !hasTtl
      ? callAuthUser()
      : auth < Date.now() / 1000 && pushAuthInLocalStorage();

    const FV = localStorage.getItem("favoriteVacancies");
    const stringifiedFV = JSON.parse(FV || "[]");

    !FV
      ? localStorage.setItem("favoriteVacancies", JSON.stringify([]))
      : dispatch(setFavoriteVacancies(stringifiedFV));
  }, [auth, callAuthUser, data, dispatch, getAuth, pushAuthInLocalStorage]);

  console.log(data);

  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        {error && <EmptyPage />}
        {isLoading && <Preloader />}
        {!error && (
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
