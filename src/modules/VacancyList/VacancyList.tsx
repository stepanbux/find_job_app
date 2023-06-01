import React, { FC } from "react";
import ItemOfVacancyList from "../../components/ItemOfVacancyList/ItemOfVacancyList";
import s from "./VacancyList.module.css";
import { NewVacancy } from "../../types/types";
import { Preloader } from "../Preloader/Preloader";
import { ModuleForEmptyPage } from "../ModuleForEmptyPage/ModuleForEmptyPage";

interface Props {
  isFetching: boolean;
  data: NewVacancy[];
}

export const VacancyList: FC<Props> = ({ isFetching, data }) => {
  return (
    <div className={s.wrapper}>
      {data.length === 0 && <ModuleForEmptyPage isShowButton={false}/>}
      {isFetching ? (
        <Preloader />
      ) : (
        data.map((item, index) => {
          return <ItemOfVacancyList data={item} key={index} />;
        })
      )}
    </div>
  );
};
