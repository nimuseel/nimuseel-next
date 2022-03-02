import Link from 'next/link';
import React from 'react';
import IArticle from '../../interfaces/articles';
import S from './styles';

interface IArticleListProps {
  articles: IArticle[];
}

const ArticleList = ({ articles }: IArticleListProps) => {
  return (
    <>
      {articles.map(({ category, slug, title, date, description }) => {
        return (
          <Link href={`/article/${category}/${slug}`} key={slug}>
            <S.ArticleWrapper>
              <S.DateAndCategory>
                <span>{date}</span>
                <S.Divider />
                <span>{category}</span>
              </S.DateAndCategory>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </S.ArticleWrapper>
          </Link>
        );
      })}
    </>
  );
};

export default ArticleList;
