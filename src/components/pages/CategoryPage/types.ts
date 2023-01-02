import { GetFiltersReponse } from '@/services/api/getFilters/types';
import { GetProductsReponse } from '@/services/api/getProducts/types';
import { GetCategoriesTreeReponse } from '@/services/api/getCategoriesTree/types';
import { GetCategoryReponse } from '@/services/api/getCategory/types';

export interface CategoryPageProps {
  isValidCategory: boolean;
  categoryId: string;
  respCategory: GetCategoryReponse | null;
  respCategories: GetCategoriesTreeReponse | null;
  respFilters: GetFiltersReponse | null;
}
