import React, { FC, useCallback, useEffect, useState } from "react";
import s from "./ItemOfVacancyList.module.css";
import { ShortVacancyInformation } from "../ShortVacancyInformation/ShortVacancyInformation";
import emptyStar from "../../assets/star.svg";
import fullStar from "../../assets/fullStar.svg";
import { NewVacancy } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import {
  setFavoriteVacancies,
  setPageForFavoriteVacancies,
} from "../../store/slice";

interface Props {
  data: NewVacancy;
}

export const ItemOfVacancyList: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [isStar, setIsStar] = useState(false);

  const favoriteVacancies = useAppSelector(
    (state) => state.mainReducer.favoriteVacancies
  );

  useEffect(() => {
    const isFavoriteVacancy = favoriteVacancies.some(
      (item) => item.id === data.id
    );
    setIsStar(isFavoriteVacancy);
  }, [data.id, favoriteVacancies]);

  const onClick = useCallback(() => {
    const isFavoriteVacancy = favoriteVacancies.some(
      (item) => item.id === data.id
    );
    setIsStar((prev) => !prev);
    const favoriteVacanciesFromLocalStore: NewVacancy[] = JSON.parse(
      localStorage.getItem("favoriteVacancies") || "[]"
    );

    if (isFavoriteVacancy) {
      const editFavoriteVacancy = favoriteVacanciesFromLocalStore.filter(
        (item) => item.id !== data.id
      );

      editFavoriteVacancy.length === 4 &&
        dispatch(setPageForFavoriteVacancies(1));

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
    <div data-elem={`vacancy-${data.id}`} className={s.wrapper}>
      <ShortVacancyInformation
        title={data.profession}
        payment_from={data.payment_from}
        payment_to={data.payment_to}
        condition={data.type_of_work}
        location={data.town}
        idOfVacancy={data.id}
        currency={data.currency}
      />
      <button
        data-elem={`vacancy-${data.id}-shortlist-button`}
        onClick={onClick}
        className={s.button}
      >
        <img src={isStar ? fullStar : emptyStar} />
      </button>
    </div>
  );
};
