import React, { FC } from "react";
import s from "./ParagraphOfDescription.module.css";

interface Props {
  title: string;
  text: string;
}

export const ParagraphOfDescription: FC<Props> = ({ title, text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
  //   <div className={s.wrapper}>
  //     <span className={s.title}>{title}</span>
  //     {text}
  //   </div>
  // );
};
