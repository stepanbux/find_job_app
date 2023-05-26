import React, { FC } from "react";
import s from "./ShortVacancyInformation.module.css";
import locationLogo from "../../assets/location.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  payment_from: number;
  payment_to: number;
  condition: string;
  location: string;
  idOfVacancy: number;
  currency: string;
}

const ShortVacancyInformation: FC<Props> = ({
  title,
  payment_from,
  payment_to,
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
          {payment_from > 0
            ? `з/п от ${payment_from} ${currency}`
            : payment_to > 0
            ? `з/п от ${payment_to} ${currency}`
            : "з/п по договоренности"}
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

export default React.memo(ShortVacancyInformation);
