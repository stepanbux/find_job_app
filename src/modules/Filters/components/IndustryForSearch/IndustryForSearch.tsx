import React from "react";

import { Title } from "../../UI/TitleForVacancySearch/TitleForVacancySearch";
import { useGetCatalogQuery } from "../../../../api/mainApi";

import s from "./IndustryForSearch.module.css";

export const IndustryForSearch = () => {
  const { data, isLoading, error } = useGetCatalogQuery(undefined, {
    refetchOnReconnect: true,
  });

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
          {data &&
            data.map((item, index) => {
              return (
                <option value={`${item.key}`} key={index}>
                  {item.title_rus}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};
