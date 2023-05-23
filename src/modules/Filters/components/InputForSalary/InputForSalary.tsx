import React, { ChangeEvent, FC, useCallback, useState } from "react";
import s from "./InputForSalary.module.css";
import { useAppDispatch, useAppSelector } from "../../../../store/redux-hooks";
import { setPaymentFrom, setPaymentTo } from "../../../../store/slice";

interface Props {
  placeholder: string;
  name: string;
}

export const InputForSalary: FC<Props> = ({ placeholder, name }) => {
  return (
    <div className={s.select_wrapper}>
      <input
        name={name}
        className={s.select}
        placeholder={placeholder}
        type="number"
      />
    </div>
  );
};
