import React, { useEffect, useLayoutEffect } from "react";
import s from "./VacancyPage.module.css";
import { HeaderOfVacancy } from "../../modules/HeaderOfVacancy/HeaderOfVacancy";
import { VacancyDescription } from "../../modules/VacancyDescription/VacancyDescription";
import { useParams } from "react-router-dom";
import { useGetVacancyWithIdQuery } from "../../api/mainApi";

export const VacancyPage = () => {
  const { idOfVacancy } = useParams();
  const { data, isLoading, error } = useGetVacancyWithIdQuery({
    idOfVacancy: Number(idOfVacancy),
  });

  if (isLoading) return <div>loading</div>;
  else {
    console.log(data.profession);
    return (
      <div className={s.wrapper}>
        <HeaderOfVacancy
          title={data.profession}
          salary={data.payment_from}
          condition={data.type_of_work.title}
          location={data.town.title}
        />
        <VacancyDescription text={data.vacancyRichText} />
      </div>
    );
  }
};
