import React from 'react';
import { CareerContent } from './CareerContent';
import { CompanyInfo } from './CompanyInfo';
import { careerList } from './data';
import { ProjectsContainer } from './ProjectsContainer';
import S from './styles';

export const Career = () => {
  return (
    <S.CareerSection>
      {careerList.map((item) => (
        <CareerContent key={item.companyName}>
          <CompanyInfo item={item} />

          <ProjectsContainer projects={item.projects} />

          <ProjectsContainer projects={item.experiences} />
        </CareerContent>
      ))}
    </S.CareerSection>
  );
};
