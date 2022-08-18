import ICareerItem from 'interfaces/careerItem';
import React from 'react';
import S from './styles';

interface CompanyInfoProps {
  item: ICareerItem;
}

export const CompanyInfo = ({ item }: CompanyInfoProps) => {
  return (
    <>
      <S.CompanyName>
        {item.companyName}
        <span>{item.period}</span>
      </S.CompanyName>

      <S.Position>{item.position}</S.Position>

      <p>{item.companyDescription}</p>
    </>
  );
};
