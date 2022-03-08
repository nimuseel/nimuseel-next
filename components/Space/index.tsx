import React from 'react';
import S from './styles';
import ISpace from './types';

interface SpaceProps extends ISpace {
  children: React.ReactNode;
}

export const Space = ({
  direction = 'horizontal',
  gap,
  children,
}: SpaceProps) => {
  return (
    <S.Spacing direction={direction} gap={gap}>
      {children}
    </S.Spacing>
  );
};
