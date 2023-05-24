import React, { FC } from "react";
import s from "./ParagraphOfDescription.module.css";

interface Props {
  text: string;
}

export const ParagraphOfDescription: FC<Props> = ({ text }) => {
  return (
    <section
      className={s.description}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
