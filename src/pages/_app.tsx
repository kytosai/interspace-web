import 'normalize.css';
import '@/assets/styles/global.scss';
import { AppPropsExtended } from '@/types/common';
import EmptyLayout from '@/components/layouts/EmptyLayout';
import Head from 'next/head';
import { Inter, Quicksand } from '@next/font/google';
import { CategoryItem } from '@/types/category';
import { getStickyCategories } from '@/services/api/getStickyCategories';
import MainLayout from '@/components/layouts/MainLayout';
import { useMemo } from 'react';
import { cloneDeep } from 'lodash';
import NextNProgress from 'nextjs-progressbar';

const interFont = Inter({
  variable: '--font-inter',
  weight: ['400', '700'],
  subsets: ['vietnamese'],
});

const quicksandFont = Quicksand({
  variable: '--font-quicksand',
  weight: ['700'],
  subsets: ['vietnamese'],
});

function App(props: AppPropsExtended) {
  const { Component, pageProps, stickyCategories } = props;

  const Layout = Component.Layout ?? EmptyLayout;

  const stickyCategoriesCached = useMemo(() => {
    return cloneDeep(stickyCategories);
  }, [stickyCategories[0]?.id]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no"
        />

        <style>
          {`
            :root {
              --font-inter: ${interFont.style.fontFamily};
              --font-quicksand: ${quicksandFont.style.fontFamily};
            }
          `}
        </style>
      </Head>

      {Layout === MainLayout ? (
        <MainLayout stickyCategories={stickyCategoriesCached}>
          <Component {...pageProps} />
        </MainLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}

      <NextNProgress
        height={2}
        color="#FB8200"
        options={{
          showSpinner: false,
        }}
      />
    </>
  );
}

App.getInitialProps = async () => {
  let stickyCategories: CategoryItem[] = [];

  try {
    const resp = await getStickyCategories();
    stickyCategories = resp.data;
  } catch (error) {
    console.log(error);
  }

  return {
    stickyCategories,
  };
};

export default App;
