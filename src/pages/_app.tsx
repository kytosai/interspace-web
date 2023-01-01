import 'normalize.css';
import '@/assets/styles/global.scss';
import { AppPropsExtended } from '@/types/common';
import EmptyLayout from '@/components/layouts/EmptyLayout';

export default function App(props: AppPropsExtended) {
  const { Component, pageProps } = props;
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
