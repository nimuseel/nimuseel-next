import { GetServerSideProps } from 'next';
import React from 'react';
import ArticleList from '../components/Article/ArticleList';
import IArticle from '../interfaces/articles';
import { getArticles, getCategories } from '../lib/api';

function Home({ articles }: { articles: IArticle[] }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const filteredCategory: string | undefined =
    (query?.category as string) || undefined;

  const articles = getArticles(
    ['title', 'slug', 'category', 'date', 'description'],
    filteredCategory,
  );
  const categories = getCategories();

  return {
    props: {
      articles,
      categories,
    },
  };
};
