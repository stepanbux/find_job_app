import React, { FC } from "react";
import { ParagraphOfDescription } from "../../pages/VacancyPage/components/ParagraphOfDescription/ParagraphOfDescription";
import s from "./VacancyDescription.module.css";

interface Props {
  text: string;
}

export const VacancyDescription: FC<Props> = ({ text }) => {
  return (
    <div className={s.wrapper}>
      <ParagraphOfDescription title="Обязанности:" text={text} />
    </div>
  );
};
