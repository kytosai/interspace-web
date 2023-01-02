import { ProductItem } from '@/types/product';

export type SortByType = 'recommended' | 'created_at' | 'price_asc';

export interface GetProductsRequest {
  _page?: number | string;
  _limit?: number | string;
  sort_by?: SortByType;
  category_id: number | string;
}

export type GetProductsReponse = ProductItem[];
