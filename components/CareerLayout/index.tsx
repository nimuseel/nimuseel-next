import React from 'react';
import S from './styles';

interface CareerLayoutProps {
  children: React.ReactNode;
}

export const CareerLayout = ({ children }: CareerLayoutProps) => {
  return <S.CareerLayout>{children}</S.CareerLayout>;
};
