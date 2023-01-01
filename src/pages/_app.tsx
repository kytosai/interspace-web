import 'normalize.css';
import '@/assets/styles/global.scss';
import { AppPropsExtended } from '@/types/common';
import EmptyLayout from '@/components/layouts/EmptyLayout';
import Head from 'next/head';
import { Inter, Quicksand } from '@next/font/google';

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
  const { Component, pageProps } = props;

  console.log({ props });
  const Layout = Component.Layout ?? EmptyLayout;

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

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.getInitialProps = async () => {
  return {
    a: 1,
  };
};

export default App;
