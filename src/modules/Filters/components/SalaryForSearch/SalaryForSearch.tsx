import React from "react";

import { Title } from "../../UI/TitleForVacancySearch/TitleForVacancySearch";
import { InputForSalary } from "../InputForSalary/InputForSalary";

import s from "./SalaryForSearch.module.css";

export const SalaryForSearch = () => {
  return (
    <div className={s.salary}>
      <Title size={16} title={"Оклад"} />
      <InputForSalary
        dataElem={"salary-from-input"}
        name={"paymentFrom"}
        placeholder="От"
      />
      <InputForSalary
        dataElem={"salary-to-input"}
        name={"paymentTo"}
        placeholder="До"
      />
    </div>
  );
};
