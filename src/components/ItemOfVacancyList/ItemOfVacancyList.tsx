import React, { FC, useCallback, useState } from "react";
import s from "./ItemOfVacancyList.module.css";
import { ShortVacancyInformation } from "../ShortVacancyInformation/ShortVacancyInformation";
import emptyStar from "../../assets/star.svg";
import fullStar from "../../assets/fullStar.svg";
import { NewVacancy, Vacancy } from "../../types/types";
import { useAppDispatch } from "../../store/redux-hooks";
import { setFavoriteVacancies } from "../../store/slice";

interface Props {
  data: NewVacancy;
}

export const ItemOfVacancyList: FC<Props> = ({ data }) => {
  const [isStar, setIsStar] = useState(false);
  const dispatch = useAppDispatch();

  const onClick = useCallback(() => {
    setIsStar((prev) => !prev);
    const favoriteVacancies = JSON.parse(
      localStorage.getItem("favoriteVacancies") || "[]"
    );
    favoriteVacancies.push(data);
    localStorage.setItem(
      "favoriteVacancies",
      JSON.stringify(favoriteVacancies)
    );
    const newFavoriteVacancies: Vacancy[] = JSON.parse(
      localStorage.getItem("favoriteVacancies") || "[]"
    );
    dispatch(setFavoriteVacancies(newFavoriteVacancies));
  }, [data, dispatch]);

  return (
    <div className={s.wrapper}>
      <ShortVacancyInformation
        title={data.profession}
        salary={data.payment_from}
        condition={data.type_of_work}
        location={data.town}
        idOfVacancy={data.id}
        currency={data.currency}
      />
      <button onClick={onClick} className={s.button}>
        <img src={isStar ? fullStar : emptyStar} />
      </button>
    </div>
  );
};
