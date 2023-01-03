export interface CategoryItem {
  id: number;
  category_name: string;
  category_slug: string;
  category_description: string;
  icon_url: string;
  parent_id: number;
  childrens: CategoryItem[];
}
