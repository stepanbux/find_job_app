import React, { FC } from "react";
import s from "./Description.module.css";

interface Props {
  text: string;
}

export const Description: FC<Props> = ({ text }) => {
  return (
    <section
      className={s.description}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
