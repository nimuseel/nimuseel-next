import React from 'react';
import S from './styles';

interface ResumeLayoutProps {
  children: React.ReactNode;
}

export const ResumeLayout = ({ children }: ResumeLayoutProps) => {
  return <S.ResumeLayout>{children}</S.ResumeLayout>;
};
