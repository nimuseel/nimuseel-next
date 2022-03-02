import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import '../styles/global.scss';
import ContentLayout from '../components/ContentLayout';
import { Header } from '../components/Header';
import MainLayout from '../components/MainLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isArticleView = pathname.includes('/article');

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
        </MainLayout>
      )}
    </>
  );
}
