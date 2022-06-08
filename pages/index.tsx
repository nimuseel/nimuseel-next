import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { allArticles } from '../.contentlayer/generated';
import ArticleList from '../components/Article/ArticleList';

function Home({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ArticleList articles={articles} />;
}

export default Home;

export const getStaticProps = async () => {
  const articles = allArticles.sort(
    (a, b) => new Date(b.date).getUTCDate() - new Date(a.date).getUTCDate(),
  );

  return {
    props: {
      articles,
    },
  };
};
