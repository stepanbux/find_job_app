import React, { FC } from "react";
import s from "./SalaryForSearch.module.css";
import { Title } from "../../../../UI/Titles/TitleForVacancySearch/TitleForVacancySearch";
import { InputForSalary } from "../InputForSalary/InputForSalary";

export const SalaryForSearch = () => {
  return (
    <div className={s.salary}>
      <Title size={16} title={"Оклад"} />
      <InputForSalary name={"paymentFrom"} placeholder="От" />
      <InputForSalary name={"paymentTo"} placeholder="До" />
    </div>
  );
};
