import React, { FormEvent, useCallback, useEffect } from "react";
import s from "./Filters.module.css";
import { MainTitleForSearch } from "./components/MainTitleForSearch/MainTitleForSearch";
import { IndustryForSearch } from "./components/IndustryForSearch/IndustryForSearch";
import { SalaryForSearch } from "./components/SalaryForSearch/SalaryForSearch";
import { CommonButton } from "../../UI/CommonButton/CommonButton";
import { useAppDispatch } from "../../store/redux-hooks";
import {
  setPage,
  setPaymentFrom,
  setPaymentTo,
  setSelectedIndustry,
} from "../../store/slice";
 
export const Filters = () => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formProps = Object.fromEntries(formData);
      dispatch(setPage(1));
      dispatch(setPaymentFrom(+formProps.paymentFrom));
      dispatch(setPaymentTo(+formProps.paymentTo));
      dispatch(setSelectedIndustry(+formProps.selectedIndustry));
    },
    [dispatch]
  );

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
