import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { NextPageExtended } from '@/types/common';
import Head from 'next/head';
import { APP_CONFIG } from '@/configs';
import Link from 'next/link';

const HomePage: NextPageExtended = () => {
  return (
    <>
      <Head>
        <title>{APP_CONFIG.BRAND_NAME}</title>
      </Head>

      <div className="container">Home page</div>
    </>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
