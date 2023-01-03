import { CategoryItem } from '@/types/category';

export interface GetCategoryRequest {
  id: string | number;
}

export type GetCategoryReponse = Partial<CategoryItem>;
