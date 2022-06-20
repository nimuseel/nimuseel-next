import React from 'react';
import { format } from 'date-fns';
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
      <span className="date">{format(new Date(date), 'yyyy년 MM월 dd일')}</span>
    </S.ArticleTitle>
  );
};
