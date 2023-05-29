import React, { ChangeEvent, FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { Pagination, PaginationItem, createTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import s from "./Pagination.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5E96FC",
      contrastText: "#5E96FC",
    },
  },
});

interface Props {
  count: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
}

export const PaginationComponent: FC<Props> = ({ count, page, onChange }) => {
  return (
    <div className={s.wrapper}>
      <ThemeProvider theme={theme}>
        <Pagination
          page={page}
          onChange={onChange}
          count={count}
          color="primary"
          shape="rounded"
          variant="outlined"
          siblingCount={0} 
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
  );
};
