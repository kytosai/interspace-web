import { CategoryItem } from '@/types/category';
import { LayoutProps } from '@/types/common';

export interface MainLayoutProps extends LayoutProps {
  stickyCategories?: CategoryItem[];
}
