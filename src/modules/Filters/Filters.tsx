import React, { FormEvent, useCallback, useEffect } from "react";
import s from "./Filters.module.css";
import { MainTitleForSearch } from "./components/MainTitleForSearch/MainTitleForSearch";
import { IndustryForSearch } from "./components/IndustryForSearch/IndustryForSearch";
import { SalaryForSearch } from "./components/SalaryForSearch/SalaryForSearch";
import { CommonButton } from "../../UI/CommonButton/CommonButton";
import { useAppDispatch } from "../../store/redux-hooks";
import {
  setCatalogues,
  setPaymentFrom,
  setPaymentTo,
  setSelectedIndustry,
} from "../../store/slice";
import { useGetCatalogQuery } from "../../api/mainApi";

export const Filters = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetCatalogQuery(null, {
    refetchOnReconnect: true,
  });

  useEffect(() => {
    dispatch(setCatalogues(data));
  }, [data, dispatch]);

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);

    dispatch(setPaymentFrom(Number(formProps.paymentFrom)));
    dispatch(setPaymentTo(Number(formProps.paymentTo)));
    dispatch(setSelectedIndustry(Number(formProps.selectedIndustry)));
  }, [dispatch]);

  return (
    <form onSubmit={onSubmit} className={s.wrapper}>
      <MainTitleForSearch />
      <div className={s.inputData}>
        <IndustryForSearch />
        <SalaryForSearch />
        <CommonButton width={275} height={40} text="Применить" />
      </div>
    </form>
  );
};
