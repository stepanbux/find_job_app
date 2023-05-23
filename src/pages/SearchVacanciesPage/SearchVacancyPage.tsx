import React, { ChangeEvent } from "react";
import { Filters } from "../../modules/Filters/Filters";
import s from "./SearchVacancyPage.module.css";
import { SearchVacancyWithName } from "../../modules/SearchVacancyWithName/SearchVacancyWithName";
import { VacancyList } from "../../modules/VacancyList/VacancyList";
import { useGetVacanciesWithFiltersQuery } from "../../api/mainApi";
import { Pagination, PaginationItem } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { setPage } from "../../store/slice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#efdee",
      contrastText: "#fff",
    },
  },
});

export const SearchVacanciesPage = () => {
  const dispatch = useAppDispatch();
  const keyword = useAppSelector((state) => state.mainReducer.keyword);
  const paymentFrom = useAppSelector((state) => state.mainReducer.paymentFrom);
  const paymentTo = useAppSelector((state) => state.mainReducer.paymentTo);
  const selectedIndustry = useAppSelector(
    (state) => state.mainReducer.selectedIndustry
  );
  const page = useAppSelector((state) => state.mainReducer.page);

  const { data, isLoading, error } = useGetVacanciesWithFiltersQuery({
    keyword,
    paymentFrom,
    paymentTo,
    selectedIndustry,
    page,
  });

  const onChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page - 1));
  };

  if (error) return <div>Something went wrong...</div>;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={s.wrapper}>
      <Filters />
      <div className={s.vacanciesFromSearch}>
        <SearchVacancyWithName />
        <VacancyList data={data.objects} />
        <div className={s.pagination}>
          <ThemeProvider theme={theme}>
            <Pagination
              onChange={onChange}
              count={20}
              color="primary"
              shape="rounded"
              variant="outlined"
              renderItem={(item) => (
                <PaginationItem
                  slots={{
                    previous: ChevronLeftIcon,
                    next: ChevronRightIcon,
                  }}
                  {...item}
                />
              )}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};
