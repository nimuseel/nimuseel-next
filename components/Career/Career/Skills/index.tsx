import React from 'react';
import S from './styles';

interface SkillsProps {
  skills: string;
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div>
      <S.Skills>사용 기술</S.Skills>
      <span>{skills}</span>
    </div>
  );
};
