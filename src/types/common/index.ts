import { CategoryItem } from '@/types/category';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageExtended<P = any> = NextPage<P> & {
  Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsExtended = AppProps & {
  Component: NextPageExtended;
  stickyCategories: CategoryItem[];
};
