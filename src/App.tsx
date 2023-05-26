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
  console.log(auth);

  const callAuthUser = useCallback(() => {
    console.log("callAuth");
    getAuth(null);
    if (data) {
      console.log("dispatch");
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
    {
      !localStorage.getItem("auth")
        ? callAuthUser()
        : auth < Date.now() / 1000 && pushAuthInLocalStorage();
    }

    {
      !localStorage.getItem("favoriteVacancies")
        ? localStorage.setItem("favoriteVacancies", JSON.stringify([]))
        : dispatch(
            setFavoriteVacancies(
              JSON.parse(localStorage.getItem("favoriteVacancies") || "[]")
            )
          );
    }
  }, [auth, callAuthUser, data, dispatch, getAuth, pushAuthInLocalStorage]);

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
