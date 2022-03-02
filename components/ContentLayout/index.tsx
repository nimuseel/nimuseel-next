import React from 'react';
import S from './styles';

interface IContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: IContentLayoutProps) => {
  return <S.Layout>{children}</S.Layout>;
};

export default ContentLayout;
