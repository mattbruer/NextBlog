import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/home-page/layout/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
