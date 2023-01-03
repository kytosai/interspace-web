import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { NextPageExtended } from '@/types/common';
import Head from 'next/head';
import { APP_CONFIG } from '@/configs';
import Alert from '@/components/shared/Alert';

const HomePage: NextPageExtended = () => {
  return (
    <>
      <Head>
        <title>{APP_CONFIG.BRAND_NAME}</title>
      </Head>

      <div className="container">
        <Alert classNames="mt-2">Please choose a category for view product list!</Alert>
      </div>
    </>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
