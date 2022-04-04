import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import '../styles/global.scss';
import ContentLayout from '../components/ContentLayout';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import MainLayout from '../components/MainLayout';
import * as gtag from '../lib/gtag';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isArticleView = pathname.includes('/article');
  const router = useRouter();

  useEffect(() => {
    router.replace(router.asPath);
  });

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Header />
      {isArticleView ? (
        <ContentLayout>
          <Component {...pageProps} />
        </ContentLayout>
      ) : (
        <MainLayout>
          <Component {...pageProps} />

          <Footer />
        </MainLayout>
      )}
    </>
  );
}
