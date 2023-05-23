import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import {
  Catalogues,
  DataForFilter,
  NewCatalogues,
  Vacancy,
} from "../types/types";

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    auth: false,
    catalogues: [] as NewCatalogues[],
    selectedIndustry: 0,
    paymentFrom: 0,
    paymentTo: 0,
    keyword: "",
    dataForFilter: {
      selectedIndustry: 0,
      paymentFrom: 0,
      paymentTo: 0,
      keyword: "",
    },
    page: 0,
    favoriteVacancies: [] as Vacancy[],
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
    setFavoriteVacancies(state, action: PayloadAction<Vacancy[]>) {
      state.favoriteVacancies = action.payload;
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
} = mainSlice.actions;

export default mainSlice.reducer;
