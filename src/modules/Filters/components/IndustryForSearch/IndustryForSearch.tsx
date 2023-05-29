import React, { useMemo } from "react";
import s from "./IndustryForSearch.module.css";
import { Title } from "../../UI/TitleForVacancySearch/TitleForVacancySearch";
import { useAppSelector } from "../../../../store/redux-hooks";

export const IndustryForSearch = () => {
  const catalogues = useAppSelector((state) => state.mainReducer.catalogues);

  const newArray = useMemo(() => {
    return catalogues.map((item, index) => {
      return (
        <option value={`${item.key}`} key={index}>
          {item.title_rus}
        </option>
      );
    });
  }, [catalogues]);

  return (
    <div className={s.industry}>
      <Title size={16} title={"Отрасль"} />
      <div className={s.select_wrapper}>
        <select
          data-elem="industry-select"
          className={s.select}
          name="selectedIndustry"
          defaultValue={0}
        >
          <option className={s.option} value={0}>
            Выберите отрасль
          </option>
          {newArray}
        </select>
      </div>
    </div>
  );
};
