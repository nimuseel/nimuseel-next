import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import React, { useMemo } from 'react';
import { remarkMdxImages } from 'remark-mdx-images';
import { ArticleComments } from '../../components/Article/ArticleComments';
import { ArticleTitle } from '../../components/Article/ArticleTitle';
import {
  articlesDirectory,
  getArticleBySlug,
  getArticles,
} from '../../lib/api';
import { MDXComponents } from '../../lib/mdxComponents';

interface IArticleProps {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
  title: string;
  description: string;
  seo: string;
  date: string;
}

const Article = ({ code, ...rest }: IArticleProps) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <NextSeo title={rest.seo} description={rest.description} />
      <ArticleTitle title={rest.title} date={rest.date} />
      <MDXComponent components={MDXComponents as any} />
      <ArticleComments />
    </>
  );
};

export default Article;

type GetStaticPropsParams = ParsedUrlQuery & { categoryAndSlug: string[] };

export const getStaticProps: GetStaticProps<
  IArticleProps,
  GetStaticPropsParams
> = async ({ params }) => {
  const [category, slug] = params.categoryAndSlug;
  const path = join(articlesDirectory, category, `${slug}.mdx`);

  const article = getArticleBySlug(path, [
    'title',
    'category',
    'date',
    'content',
    'description',
  ]);

  const { code, frontmatter } = await bundleMDX({
    source: article.content,
    cwd: `${articlesDirectory}/public/images`,
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
      ];

      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.png': 'dataurl',
      };

      return options;
    },
  });

  return {
    props: {
      code,
      frontmatter,
      title: article.title,
      seo: 'nimuseel | ' + article.title,
      description: article.description,
      date: article.date,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getArticles(['category', 'slug']);

  return {
    paths: articles.map((article) => {
      return {
        params: {
          categoryAndSlug: [article.category, article.slug],
        },
      };
    }),
    fallback: false,
  };
};
