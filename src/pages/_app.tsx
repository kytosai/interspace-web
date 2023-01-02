import 'normalize.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '@/assets/styles/global.scss';
import '@/assets/styles/utils.scss';

import EmptyLayout from '@/components/layouts/EmptyLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { getStickyCategories } from '@/services/api/getStickyCategories';
import { CategoryItem } from '@/types/category';
import { AppPropsExtended } from '@/types/common';
import { Inter, Quicksand, Roboto } from '@next/font/google';
import { cloneDeep } from 'lodash';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { useMemo } from 'react';
import { Provider } from 'react-redux';
import store from '@/store';

const interFont = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const quicksandFont = Quicksand({
  variable: '--font-quicksand',
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

const robotoFont = Roboto({
  variable: '--font-roboto',
  weight: ['500'],
  subsets: ['latin'],
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
              --font-roboto: ${robotoFont.style.fontFamily};
            }
          `}
        </style>
      </Head>

      <Provider store={store}>
        {Layout === MainLayout ? (
          <MainLayout stickyCategories={stickyCategoriesCached}>
            <Component {...pageProps} />
          </MainLayout>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Provider>

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
