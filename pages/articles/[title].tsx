import { GetStaticPaths, GetStaticProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import React from 'react';

interface IGetStaticProps {
  props: {
    title: string;
  };
}

const Article = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

export default Article;

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      title: params.title,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { title: 'hello' },
      },
    ],
    fallback: false,
  };
};
