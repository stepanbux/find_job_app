import React, { FC, useCallback, useState } from "react";
import s from "./HeaderOfVacancy.module.css";
import locationLogo from "../../assets/location.svg";
import emptyStar from "../../assets/star.svg";
import fullStar from "../../assets/fullStar.svg";

interface Props {
  title: string;
  salary: string;
  condition: string;
  location: string;
}

export const HeaderOfVacancy: FC<Props> = ({
  title,
  salary,
  condition,
  location,
}) => {
  const [isStar, setIsStar] = useState(false);

  const onClick = useCallback(() => {
    setIsStar((prev) => !prev);
  }, []);
  return (
    <div className={s.wrapper}>
      <div className={s.vacancy}>
        <span className={s.vacancy_title}>{title}</span>
        <div className={s.vacancy_information}>
          <span className={s.information_salary}>з/п от {salary}</span>
          <span className={s.information_dot}>•</span>
          <span className={s.information_condition}>{condition}</span>
        </div>
        <div className={s.vacancy_location}>
          <img src={locationLogo} />
          <span className={s.location_city}>{location}</span>
        </div>
      </div>
      <button onClick={onClick} className={s.button}>
        <img className={s.star} src={isStar ? fullStar : emptyStar} />
      </button>
    </div>
  );
};
