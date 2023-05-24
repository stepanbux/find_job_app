import React from "react";
import s from "./VacancyPage.module.css";
import { HeaderOfVacancy } from "../../modules/HeaderOfVacancy/HeaderOfVacancy";
import { useParams } from "react-router-dom";
import { useGetVacancyWithIdQuery } from "../../api/mainApi";
import { ParagraphOfDescription } from "./components/ParagraphOfDescription/ParagraphOfDescription";

export const VacancyPage = () => {
  const { idOfVacancy } = useParams();
  const { data, isLoading } = useGetVacancyWithIdQuery({
    idOfVacancy: Number(idOfVacancy),
  });

  if (isLoading) return <div>loading</div>;
  return (
    <div className={s.wrapper}>
      <HeaderOfVacancy
        id={Number(idOfVacancy)}
        title={data.profession}
        salary={data.payment_from}
        condition={data.type_of_work.title}
        location={data.town.title}
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
