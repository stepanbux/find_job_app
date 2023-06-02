import React, { FormEvent, useCallback, useEffect, useState } from "react";

import s from "./SearchVacancyWithName.module.css";
import { CommonButton } from "../../UI/CommonButton/CommonButton";
import { useAppDispatch } from "../../store/redux-hooks";
import { setKeyword } from "../../store/slice";

export const SearchVacancyWithName = () => {
  const dispatch = useAppDispatch();
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formProps = Object.fromEntries(formData);
      dispatch(setKeyword(formProps.keyword.toString()));
    },
    [dispatch]
  );

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 500px)");

    function updateIsNarrowScreen(event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) {
      setIsNarrowScreen(event.matches);
    }
    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener("change", updateIsNarrowScreen);
      return function cleanup() {
        mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
      };
    } else {
      mediaWatcher.addListener(updateIsNarrowScreen);
      return function cleanup() {
        mediaWatcher.removeListener(updateIsNarrowScreen);
      };
    }
  }, []);

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
        placeholder={
          isNarrowScreen ? "Название вакансии" : "Введите название вакансии"
        }
      />
      <div className={s.buttonWrapper}>
        <CommonButton width={83} height={32} text="Поиск" />
      </div>
    </form>
  );
};
