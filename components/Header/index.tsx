import Link from 'next/link';
import React from 'react';
import S from './styles';

export const Header = () => {
  return (
    <S.Header>
      <Link href="/" passHref>
        <a className="logo">nimuseel</a>
      </Link>
      <S.HeaderExtraContainer>
        <Link href="/resume">Resume</Link>
        <Link href="https://github.com/nimuseel" passHref>
          <a target="_blank">Github</a>
        </Link>
      </S.HeaderExtraContainer>
    </S.Header>
  );
};
