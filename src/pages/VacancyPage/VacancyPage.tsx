import React from "react";
import s from "./VacancyPage.module.css";
import { HeaderOfVacancy } from "../../modules/HeaderOfVacancy/HeaderOfVacancy";
import { useParams } from "react-router-dom";
import { useGetVacancyWithIdQuery } from "../../api/mainApi";
import { ParagraphOfDescription } from "./components/ParagraphOfDescription/ParagraphOfDescription";
import { Preloader } from "../../modules/Preloader/Preloader";

export const VacancyPage = () => {
  const { idOfVacancy } = useParams();
  const { data, isLoading } = useGetVacancyWithIdQuery({
    idOfVacancy: Number(idOfVacancy),
  });

  if (isLoading) return <Preloader />;
  return (
    <div className={s.wrapper}>
      <HeaderOfVacancy
        data={{
          profession: data.profession,
          firm_name: data.firm_name,
          town: data.town.title,
          type_of_work: data.type_of_work.title,
          payment_from: data.payment_from,
          payment_to: data.payment_to,
          currency: data.currency,
          id: Number(idOfVacancy),
        }}
      />
      <ParagraphOfDescription text={data.vacancyRichText} />
    </div>
  );
};
