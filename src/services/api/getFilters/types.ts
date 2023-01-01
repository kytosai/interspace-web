export interface GetFiltersRequest {}

export interface FilterItem {
  key: string;
  name: string;
}

export interface FilterGroup {
  key: string;
  name: string;
  list: FilterItem[];
}

export type GetFiltersReponse = FilterGroup[];
