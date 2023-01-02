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
