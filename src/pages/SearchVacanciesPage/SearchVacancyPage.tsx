import React, { ChangeEvent, useMemo } from "react";

import { Filters } from "../../modules/Filters/Filters";

import { SearchVacancyWithName } from "../../modules/SearchVacancyWithName/SearchVacancyWithName";
import { VacancyList } from "../../modules/VacancyList/VacancyList";
import { useGetVacanciesWithFiltersQuery } from "../../api/mainApi";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { setPage } from "../../store/slice";
import { Vacancy } from "../../types/types";
import { Preloader } from "../../modules/Preloader/Preloader";
import { PaginationComponent } from "../../modules/Pagination/Pagination";

import s from "./SearchVacancyPage.module.css";

export const SearchVacanciesPage = () => {
  const dispatch = useAppDispatch();
  const keyword = useAppSelector((state) => state.mainReducer.keyword);
  const paymentFrom = useAppSelector((state) => state.mainReducer.paymentFrom);
  const paymentTo = useAppSelector((state) => state.mainReducer.paymentTo);
  const selectedIndustry = useAppSelector(
    (state) => state.mainReducer.selectedIndustry
  );
  const page = useAppSelector((state) => state.mainReducer.page);

  const { data, isLoading, isFetching, error } =
    useGetVacanciesWithFiltersQuery({
      keyword,
      paymentFrom,
      paymentTo,
      selectedIndustry,
      page,
    });

  const onChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

  const arrayOfVacancy = useMemo(
    () =>
      data &&
      data.objects.map((item: Vacancy) => {
        return {
          profession: item.profession,
          firm_name: item.firm_name,
          town: item.town.title,
          type_of_work: item.type_of_work.title,
          payment_from: item.payment_from,
          payment_to: item.payment_to,
          currency: item.currency,
          id: item.id,
        };
      }),
    [data]
  );

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (isLoading) {
    return <Preloader />;
  }

  const count = data.total / 4 > 125 ? 125 : Math.ceil(data.total / 4);
  return (
    <div className={s.wrapper}>
      <Filters />
      <div className={s.vacanciesFromSearch}>
        <SearchVacancyWithName />
        <VacancyList isFetching={isFetching} data={arrayOfVacancy} />
        <PaginationComponent count={count} page={page} onChange={onChange} />
      </div>
    </div>
  );
};
