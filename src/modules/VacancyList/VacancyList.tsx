import React, { FC, useEffect, useMemo } from "react";
import { ItemOfVacancyList } from "../../components/ItemOfVacancyList/ItemOfVacancyList";
import s from "./VacancyList.module.css";
import { NewVacancy, Vacancy } from "../../types/types";
import { useAppDispatch } from "../../store/redux-hooks";

interface Props {
  data: NewVacancy[];
}

export const VacancyList: FC<Props> = ({ data }) => {
  
  const arrayVacancies = data.map((item, index) => {
    return <ItemOfVacancyList data={item} key={index} />;
  });

  return <div className={s.wrapper}>{arrayVacancies}</div>;
};
