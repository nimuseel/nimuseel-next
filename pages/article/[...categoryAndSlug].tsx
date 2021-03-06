import { format } from 'date-fns';
import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import React from 'react';
import { allArticles } from '../../.contentlayer/generated';
import { ArticleComments } from '../../components/Article/ArticleComments';
import { ArticleTitle } from '../../components/Article/ArticleTitle';
import metadata from '../../data/metadata';

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(article.body.code);

  return (
    <>
      <NextSeo
        title={article.title}
        description={article.description}
        canonical={`${metadata.url}/article/${article.category}/${
          article._raw.flattenedPath.split('/')[1]
        }`}
        openGraph={{
          type: 'article',
          url: `${metadata.url}/article/${article.category}/${
            article._raw.flattenedPath.split('/')[1]
          }`,
          article: {
            publishedTime: format(new Date(article.date), 'yyyy-MM-dd'),
          },
        }}
      />

      <ArticleTitle title={article.title} date={article.date} />
      <MDXComponent />
      <ArticleComments />
    </>
  );
};

export default Article;

export const getStaticPaths = async () => {
  return {
    paths: allArticles.map((post) => ({
      params: {
        categoryAndSlug: [post.category, post._raw.flattenedPath.split('/')[1]],
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const article = allArticles.find((article) =>
    article._raw.flattenedPath.includes(params.categoryAndSlug[1]),
  );

  return {
    props: {
      article,
    },
  };
};
