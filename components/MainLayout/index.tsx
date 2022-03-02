import React from 'react';
import S from './styles';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return <S.Layout>{children}</S.Layout>;
};

export default MainLayout;
