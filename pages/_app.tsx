import { AppProps } from 'next/app';
import React from 'react';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
