import { CategoryItem } from '@/types/category';

export interface GetCategoriesRequest {
  _page?: number | string;
  _limit?: number | string;
  _sort?: string;
  _order?: string;
  q?: string;
}

export type GetCategoriesReponse = CategoryItem[];
