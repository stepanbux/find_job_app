import React, { FC, useMemo } from "react";
import s from "./TitleForVacancySearch.module.css";

interface Props {
  size: number;
  title: string;
}

export const Title: FC<Props> = ({ size, title }) => {
  const style = useMemo(() => {
    return {
      fontSize: size,
    };
  }, [size]);

  return (
    <span style={style} className={s.text}>
      {title}
    </span>
  );
};
