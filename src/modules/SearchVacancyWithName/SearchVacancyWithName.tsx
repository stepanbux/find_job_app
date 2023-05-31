import React, {
  FormEvent,
  useCallback,
  useEffect,
} from "react";

import s from "./SearchVacancyWithName.module.css";
import { CommonButton } from "../../UI/CommonButton/CommonButton";
import { useAppDispatch } from "../../store/redux-hooks";
import { setKeyword } from "../../store/slice";

export const SearchVacancyWithName = () => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formProps = Object.fromEntries(formData);
      dispatch(setKeyword(formProps.keyword.toString()));
    },
    [dispatch]
  );

  useEffect(
    () => () => {
      dispatch(setKeyword(""));
    },
    [dispatch]
  );

  return (
    <form onSubmit={onSubmit} className={s.search}>
      <input
        data-elem="search-input"
        name="keyword"
        type="text"
        className={s.input}
        placeholder="Введите вакансию"
      />
      <input
        data-elem="search-input"
        name="keyword"
        type="text"
        className={s.inputMobile}
        placeholder="Введите вакансию"
      />
      <div className={s.buttonWrapper}>
        <CommonButton width={83} height={32} text="Поиск" />
      </div>
    </form>
  );
};
