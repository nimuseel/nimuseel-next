import React from 'react';
import S from './styles';

interface CareerContentProps {
  children: React.ReactNode;
}

export const CareerContent = ({ children }: CareerContentProps) => {
  return <S.CareerContent>{children}</S.CareerContent>;
};
