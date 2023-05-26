import React, { FC } from "react";
import ItemOfVacancyList from "../../components/ItemOfVacancyList/ItemOfVacancyList";
import s from "./VacancyList.module.css";
import { NewVacancy } from "../../types/types";

interface Props {
  data: NewVacancy[];
}

export const VacancyList: FC<Props> = ({ data }) => {
  const arrayVacancies = data.map((item, index) => {
    return <ItemOfVacancyList data={item} key={index} />;
  });

  return <div className={s.wrapper}>{arrayVacancies}</div>;
};
