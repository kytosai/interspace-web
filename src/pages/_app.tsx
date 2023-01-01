import 'normalize.css';
import '@/assets/styles/global.scss';
import { AppPropsExtended } from '@/types/common';
import EmptyLayout from '@/components/layouts/EmptyLayout';
import Head from 'next/head';

export default function App(props: AppPropsExtended) {
  const { Component, pageProps } = props;
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
