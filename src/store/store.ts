import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import mainReducer from "./slice";

import { mainApi } from "../api/mainApi";

const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
  mainReducer: mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(mainApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
