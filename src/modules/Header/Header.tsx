import React from "react";
import s from "./Header.module.css";
import imageLogo from "../../assets/imageLogo.svg";
import textLogo from "../../assets/textLogo.svg";
import { ButtonsForHeader } from "./components/ButtonsForHeader/ButtonsForHeader";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const toHome = () => {
    return navigate("/");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.logo} onClick={toHome}>
        <img className={s.imageLogo} src={imageLogo} />
        <img className={s.textLogo} src={textLogo} />
      </div>
      <ButtonsForHeader />
    </div>
  );
};
