export interface Positions {
  title_rus: string;
  url_rus: string;
  title: string;
  id_parent: number;
  key: number;
}

export interface Catalogues {
  key: number;
  positions: Array<Positions>;
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

export interface NewCatalogues {
  key: number;
  title_rus: string;
  title_trimmed: string;
}

export interface Filters {
  keyword: string;
  paymentFrom: number;
  paymentTo: number;
  selectedIndustry: number;
  page: number;
}

export interface Vacancies {
  objects: Array<Vacancy>;
  total: number;
  more: true;
  subscription_id: number;
  subscription_active: false;
}

export interface Vacancy {
  profession: string;
  firm_name: string;
  town: {
    title: string;
    declension: string;
    genitive: string;
    hasMetro: false;
    id: number;
  };
  type_of_work: { id: number; title: string };
  payment_from: number;
  payment_to: number;
  currency: string;
  id: number;
}

export interface NewVacancy {
  profession: string;
  firm_name: string;
  town: string;
  type_of_work: string;
  payment_from: number;
  payment_to: number;
  currency: string;
  id: number;
}
