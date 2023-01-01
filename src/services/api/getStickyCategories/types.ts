export interface GetStickyCategoriesRequest {
  _page?: number | string;
  _limit?: number | string;
  _sort?: string;
  _order?: string;
  q?: string;
}

export interface CategoryItem {
  id: number;
  category_name: string;
  category_slug: string;
  category_description: string;
  icon_url: string;
  parent_id: number;
  childrens: CategoryItem[];
}

export type GetStickyCategoriesReponse = CategoryItem[];
