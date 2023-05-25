import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import s from "./SearchVacancyWithName.module.css";
import { CommonButton } from "../../UI/CommonButton/CommonButton";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { setKeyword } from "../../store/slice";

export const SearchVacancyWithName = () => {
  const dispatch = useAppDispatch();
  const keyword = useAppSelector((state) => state.mainReducer.keyword);

  const [searchText, setSearchText] = useState(keyword);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formProps = Object.fromEntries(formData);
      dispatch(setKeyword(formProps.keyword.toString()));
    },
    [dispatch]
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

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
        onChange={onChange}
        value={searchText}
        type="text"
        className={s.input}
        placeholder="Введите название вакансии"
      />
      <div className={s.buttonWrapper}>
        <CommonButton width={83} height={32} text="Поиск" />
      </div>
    </form>
  );
};
