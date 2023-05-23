import React, { FC, useCallback } from "react";
import s from "./ShortVacancyInformation.module.css";
import locationLogo from "../../assets/location.svg";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
  title: string;
  salary: number;
  condition: string;
  location: string;
  idOfVacancy: number;
  currency: string;
}

export const ShortVacancyInformation: FC<Props> = ({
  title,
  salary,
  condition,
  location,
  idOfVacancy,
  currency,
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/vacancy/${idOfVacancy}`);
  };

  return (
    <div className={s.wrapper}>
      <span onClick={onClick} className={s.title}>
        {title}
      </span>
      <div className={s.information}>
        <span className={s.salary}>
          от {salary} {currency}
        </span>
        <span className={s.dot}>•</span>
        <span className={s.condition}>{condition}</span>
      </div>
      <div className={s.location}>
        <img src={locationLogo} />
        <span className={s.city}>{location}</span>
      </div>
    </div>
  );
};
