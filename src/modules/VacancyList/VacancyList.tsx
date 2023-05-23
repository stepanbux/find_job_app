import React, { FC } from "react";
import { ItemOfVacancyList } from "../../components/ItemOfVacancyList/ItemOfVacancyList";
import s from "./VacancyList.module.css";
import { Vacancies, Vacancy } from "../../types/types";

interface Props {
  data: Vacancy[];
}

export const VacancyList: FC<Props> = ({ data }) => {
  const array = data.map((item) => {
    return {
      profession: item.profession,
      firm_name: item.firm_name,
      town: item.town.title,
      type_of_work: item.type_of_work.title,
      payment_from: item.payment_from,
      payment_to: item.payment_to,
      currency: item.currency,
      id: item.id,
    };
  });

  console.log(array);
  const arrayVacancies = array.map((item, index) => {
    return <ItemOfVacancyList data={item} key={index} />;
  });

  return <div className={s.wrapper}>{arrayVacancies}</div>;
};
