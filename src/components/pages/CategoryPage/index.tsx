import React, { useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { NextPageExtended } from '@/types/common';
import Head from 'next/head';
import { formatPageHeadTitle } from '@/helpers/pageHeadTitleHelper';
import { getProducts } from '@/services/api/getProducts';

const CategoryPage: NextPageExtended = () => {
  const pageHeadTitle = formatPageHeadTitle('Category');

  useEffect(() => {
    (async () => {
      try {
        const resp = await getProducts();
        console.log({ resp });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
