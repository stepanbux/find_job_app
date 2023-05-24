import React, { FC } from "react";
import s from "./InputForSalary.module.css";

interface Props {
  placeholder: string;
  name: string;
}

export const InputForSalary: FC<Props> = ({ placeholder, name }) => {
  return (
    <div className={s.wrapper}>
      <input
        name={name}
        className={s.input}
        placeholder={placeholder}
        type="number"
      />
    </div>
  );
};
