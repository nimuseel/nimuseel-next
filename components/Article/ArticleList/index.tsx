import { Card } from '@nextui-org/react';
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
          <Card key={article._id} isHoverable>
            <Card.Body>
              <Link href={`/article/${article._raw.flattenedPath}`}>
                <S.ArticleWrapper>
                  <S.PublishedAt>
                    {format(new Date(article.date), 'yyyy년 MM월 dd일')}
                  </S.PublishedAt>
                  <S.Title>{article.title}</S.Title>
                  <S.Description>{article.description}</S.Description>
                </S.ArticleWrapper>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default ArticleList;
