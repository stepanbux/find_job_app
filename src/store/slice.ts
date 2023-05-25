import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { Catalogues, NewCatalogues, NewVacancy } from "../types/types";

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    auth: false,
    catalogues: [] as NewCatalogues[],
    selectedIndustry: 0,
    paymentFrom: 0,
    paymentTo: 0,
    keyword: "",
    page: 1,
    pageForFavoriteVacancies: 1,
    favoriteVacancies: [] as NewVacancy[],
    arrayForEachPageOfFavoriteVacancies: [] as NewVacancy[],
  },
  reducers: {
    setCatalogues(state, action: PayloadAction<Catalogues[]>) {
      const newCatalogues: NewCatalogues[] = _.map(action.payload, (item) => {
        return {
          key: item.key,
          title_rus: item.title_rus,
          title_trimmed: item.title_trimmed,
        };
      });
      state.catalogues = newCatalogues;
    },
    setSelectedIndustry(state, action: PayloadAction<number>) {
      state.selectedIndustry = action.payload;
    },
    setPaymentFrom(state, action: PayloadAction<number>) {
      state.paymentFrom = action.payload;
    },
    setPaymentTo(state, action: PayloadAction<number>) {
      state.paymentTo = action.payload;
    },
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPageForFavoriteVacancies(state, action: PayloadAction<number>) {
      state.pageForFavoriteVacancies = action.payload;
    },
    setFavoriteVacancies(state, action: PayloadAction<NewVacancy[]>) {
      state.favoriteVacancies = action.payload;
    },
    setArrayForEachPageOfFavoriteVacancies(
      state,
      action: PayloadAction<number>
    ) {
      const startIndex = (action.payload - 1) * 4;
      state.arrayForEachPageOfFavoriteVacancies = state.favoriteVacancies.slice(
        startIndex,
        startIndex + 4
      );
    },
  },
});

export const {
  setCatalogues,
  setSelectedIndustry,
  setPaymentFrom,
  setPaymentTo,
  setKeyword,
  setPage,
  setFavoriteVacancies,
  setPageForFavoriteVacancies,
  setArrayForEachPageOfFavoriteVacancies,
} = mainSlice.actions;

export default mainSlice.reducer;
