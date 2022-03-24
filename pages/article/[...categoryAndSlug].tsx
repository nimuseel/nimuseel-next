import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import React, { useMemo } from 'react';
import { remarkMdxImages } from 'remark-mdx-images';
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
}

const Article = ({ code, frontmatter }: IArticleProps) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);

  return <MDXComponent components={MDXComponents} />;
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

  /*const mdxSource = await bundleMDX({
    source: article.content,
  });*/

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

  // const { code, frontmatter } = mdxSource;

  return {
    props: {
      code,
      frontmatter,
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
