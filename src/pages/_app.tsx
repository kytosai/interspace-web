import 'normalize.css';
import '@/assets/styles/global.scss';
import { AppPropsExtended } from '@/types/common';
import EmptyLayout from '@/components/layouts/EmptyLayout';
import Head from 'next/head';
import { Inter } from '@next/font/google';

const interFont = Inter({
  variable: '--inter-font',
  weight: ['400', '700'],
  subsets: ['vietnamese'],
});

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

        <style>{`
          :root {
            --inter-font: ${interFont.style.fontFamily};
          }
        `}</style>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
