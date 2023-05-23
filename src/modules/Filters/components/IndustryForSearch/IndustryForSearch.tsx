import React, { ChangeEvent, FC, memo, useMemo, useState } from "react";
import s from "./IndustryForSearch.module.css";
import { Title } from "../../../../UI/Titles/TitleForVacancySearch/TitleForVacancySearch";
import { useAppDispatch, useAppSelector } from "../../../../store/redux-hooks";
import { setSelectedIndustry } from "../../../../store/slice";

export const IndustryForSearch = () => {
  const dispatch = useAppDispatch();
  const catalogues = useAppSelector((state) => state.mainReducer.catalogues);
  const selectedIndustry = useAppSelector(
    (state) => state.mainReducer.selectedIndustry
  );

  const [selected, setSelected] = useState(selectedIndustry);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(e.target.value));
  };

  // console.log(catalogues);
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
