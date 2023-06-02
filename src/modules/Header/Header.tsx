import React from "react";

import { useNavigate } from "react-router-dom";

import imageLogo from "../../assets/imageLogo.svg";

import textLogo from "../../assets/textLogo.svg";

import s from "./Header.module.css";

import { ButtonsForHeader } from "./components/ButtonsForHeader/ButtonsForHeader";


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
