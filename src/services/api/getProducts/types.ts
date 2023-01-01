export interface GetProductsRequest {
  _page?: number | string;
  _limit?: number | string;
  _sort?: string;
  _order?: string;
  q?: string;
}

export interface ProductItem {
  id: number;
  product_name: string;
  product_descriptions: string;
  product_tag: string[];
  product_price: number;
  product_vote: number;
  product_image: string;
  year_of_manufacture: number;
  created_at: number;
  category_id: number;
}

export type GetProductsReponse = ProductItem[];
