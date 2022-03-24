import React from 'react';
import S from './styles';

interface CodeProps {
  children: string;
}

export const Code = ({ children }: CodeProps) => {
  return <S.Code>{children}</S.Code>;
};
