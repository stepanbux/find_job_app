import React, { FC } from "react";
import s from "./InputForSalary.module.css";

interface Props {
  dataElem: string;
  placeholder: string;
  name: string;
}

export const InputForSalary: FC<Props> = ({ dataElem, placeholder, name }) => {
  return (
    <div className={s.wrapper}>
      <input
        data-elem={dataElem}
        name={name}
        className={s.input}
        placeholder={placeholder}
        type="number"
      />
    </div>
  );
};
