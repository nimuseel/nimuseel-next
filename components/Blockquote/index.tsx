import React from 'react';
import S from './styles';

interface BlockquoteProps {
  children: any;
}

export const Blockquote = ({ children }: BlockquoteProps) => {
  const contentArray = children.filter((child) => child !== '\n');
  const [contentObject] = contentArray;
  const { children: text } = contentObject.props;

  return <S.Blockquote>{text}</S.Blockquote>;
};
