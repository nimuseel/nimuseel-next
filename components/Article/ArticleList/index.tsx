import Link from 'next/link';
import React from 'react';
import { Article } from '../../../.contentlayer/generated';
import IArticle from '../../../interfaces/articles';
import S from './styles';

interface IArticleListProps {
  articles: Article[];
}

const ArticleList = ({ articles }: IArticleListProps) => {
  console.log('11', articles);
  return (
    <>
      {articles.map((article) => {
        return (
          <Link
            href={`/article/${article._raw.flattenedPath}`}
            key={article._id}
          >
            <S.ArticleWrapper>
              <S.PublishedAt>{article.date}</S.PublishedAt>
              <S.Title>{article.title}</S.Title>
              <S.Description>{article.description}</S.Description>
            </S.ArticleWrapper>
          </Link>
        );
      })}
    </>
  );
};

export default ArticleList;
