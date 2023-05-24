import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Filters } from "../types/types";

export const mainApi = createApi({
  reducerPath: "mainApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://startup-summer-proxy-production.up.railway.app/2.0/",
    headers: {
      "x-secret-key": "GEU4nvd3rej*jeh.eqp",
      "X-Api-App-Id":
        "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
    },
  }),
  endpoints: (build) => ({
    authUser: build.query({
      query: () =>
        "oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
    }),
    getCatalog: build.query({
      query: () => "catalogues",
    }),
    getVacanciesWithFilters: build.query({
      query: (data: Filters) =>
        `vacancies/?&published=1&count=4&page=${data.page - 1}&keyword=${
          data.keyword
        }&payment_from=${data.paymentFrom}&payment_to=${
          data.paymentTo
        }&catalogues=${data.selectedIndustry}`,
    }),
    getVacancyWithId: build.query({
      query: (data) => `vacancies/${data.idOfVacancy}`,
    }),
  }),
});

export const {
  useAuthUserQuery,
  useGetCatalogQuery,
  useGetVacanciesWithFiltersQuery,
  useGetVacancyWithIdQuery,
} = mainApi;
