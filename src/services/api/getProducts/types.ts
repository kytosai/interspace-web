import { ProductItem } from '@/types/product';

export interface GetProductsRequest {
  _page?: number | string;
  _limit?: number | string;
  _sort?: string;
  _order?: string;
  category_id: number | string;
}

export type GetProductsReponse = ProductItem[];
