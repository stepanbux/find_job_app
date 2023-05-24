import React, { ChangeEvent, useMemo, useState } from "react";
import s from "./IndustryForSearch.module.css";
import { Title } from "../../../../UI/Titles/TitleForVacancySearch/TitleForVacancySearch";
import { useAppSelector } from "../../../../store/redux-hooks";

export const IndustryForSearch = () => {
  const catalogues = useAppSelector((state) => state.mainReducer.catalogues);
  const selectedIndustry = useAppSelector(
    (state) => state.mainReducer.selectedIndustry
  );

  const [selected, setSelected] = useState(selectedIndustry);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(e.target.value));
  };

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
          value={selected}
          onChange={onChange}
        >
          <option value={0} disabled>
            Выберите отрасль
          </option>
          {newArray}
        </select>
      </div>
    </div>
  );
};
