import React, { FC } from "react";
import s from "./TitleForVacancySearch.module.css";

interface Props {
  size: number;
  title: string;
}

export const Title: FC<Props> = ({ size, title }) => {
  return (
    <span style={{ fontSize: size }} className={`${s.text}`}>
      {title}
    </span>
  );
};
