import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import s from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <div className={s.wrapper}>
      <CircularProgress />
    </div>
  );
};
