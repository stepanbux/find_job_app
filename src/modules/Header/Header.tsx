import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/Union.svg";
import text from "../../assets/Jobored.svg";
import { ButtonsForHeader } from "./components/ButtonsForHeader/ButtonsForHeader";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const toHome = () => {
    return navigate("/");
  };

  return (
    <div className={s.wrapper}>
      {/* <img className={s.logo} src={logo} onClick={toHome} /> */}
      <div className={s.logo} onClick={toHome}>
        <img className={s.imageLogo} src={logo} />
        <img className={s.textLogo} src={text} />
      </div>
      <ButtonsForHeader />
    </div>
  );
};
