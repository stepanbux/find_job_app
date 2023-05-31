import React, { FC, useCallback, memo } from "react";
import s from "./ItemOfVacancyList.module.css";
import ShortVacancyInformation from "../ShortVacancyInformation/ShortVacancyInformation";
import emptyStar from "../../assets/star.svg";
import fullStar from "../../assets/fullStar.svg";
import { NewVacancy } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { setFavoriteVacancies } from "../../store/slice";

interface Props {
  data: NewVacancy;
}

const ItemOfVacancyList: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const favoriteVacancies = useAppSelector(
    (state) => state.mainReducer.favoriteVacancies
  );

  const isFavoriteVacancy = favoriteVacancies.some(
    (item) => item.id === data.id
  );

  const onClick = useCallback(() => {
    let newVacancies = [] as NewVacancy[];

    if (isFavoriteVacancy) {
      newVacancies = favoriteVacancies.filter((item) => item.id !== data.id);
    }

    if (!isFavoriteVacancy) {
      newVacancies = [...favoriteVacancies, data];
    }

    dispatch(setFavoriteVacancies(newVacancies));
    localStorage.setItem("favoriteVacancies", JSON.stringify(newVacancies));
  }, [data, dispatch, favoriteVacancies, isFavoriteVacancy]);

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
        <img src={isFavoriteVacancy ? fullStar : emptyStar} />
      </button>
    </div>
  );
};

export default memo(ItemOfVacancyList) as typeof ItemOfVacancyList;
