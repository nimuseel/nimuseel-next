import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { getArticles, getCategories } from '../lib/api';

function Home({
  articles,
  categories,
}: {
  articles: any;
  categories: string[];
}): JSX.Element {
  return (
    <div>
      {articles?.map(({ category, slug, title, date }) => {
        return (
          <Link href={`/article/${category}/${slug}`} key={slug}>
            <a title={title}>{title}</a>
          </Link>
        );
      })}
    </div>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const filteredCategory: string | undefined =
    (query?.category as string) || undefined;

  const articles = getArticles(
    ['title', 'slug', 'category', 'date'],
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
