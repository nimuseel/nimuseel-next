import Link from 'next/link';
import React from 'react';
import { Article } from '../../../.contentlayer/generated';
import { format } from 'date-fns';
import S from './styles';

interface IArticleListProps {
  articles: Article[];
}

const ArticleList = ({ articles }: IArticleListProps) => {
  return (
    <>
      {articles.map((article) => {
        return (
          <Link
            href={`/article/${article._raw.flattenedPath}`}
            key={article._id}
          >
            <S.ArticleWrapper>
              <S.PublishedAt>
                {format(new Date(article.date), 'yyyy년 MM월 dd일')}
              </S.PublishedAt>
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
