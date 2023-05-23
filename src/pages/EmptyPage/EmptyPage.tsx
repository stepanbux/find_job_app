import React from "react";
import s from "./EmptyPage.module.css";
import { ModuleForEmptyPage } from "../../modules/ModuleForEmptyPage/ModuleForEmptyPage";

export const EmptyPage = () => {
  return (
    <div className={s.wrapper}>
      <ModuleForEmptyPage />
    </div>
  );
};
