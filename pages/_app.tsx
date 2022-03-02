import { AppProps } from 'next/app';
import React from 'react';
import '../styles/global.scss';
import { Header } from '../components/Header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
