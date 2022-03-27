import React from 'react';
import S from './styles';

interface ArticleTitleProps {
  title: string;
  date: string;
}

export const ArticleTitle = ({ title, date }: ArticleTitleProps) => {
  return (
    <S.ArticleTitle>
      {title}
      <br />
      <span className="date">{date}</span>
    </S.ArticleTitle>
  );
};
