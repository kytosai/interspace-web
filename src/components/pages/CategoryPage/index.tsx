import React, { useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { NextPageExtended } from '@/types/common';
import Head from 'next/head';
import { formatPageHeadTitle } from '@/helpers/pageHeadTitleHelper';

const CategoryPage: NextPageExtended = () => {
  const pageHeadTitle = formatPageHeadTitle('Category');

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>{pageHeadTitle}</title>
      </Head>
    </>
  );
};

CategoryPage.Layout = MainLayout;

export default CategoryPage;
