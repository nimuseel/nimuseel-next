import React from 'react';
import { CareerContent } from './CareerContent';
import { CompanyInfo } from './CompanyInfo';
import { careerList, otherExperience } from './data';
import { ProjectsContainer } from './ProjectsContainer';
import S from './styles';

export const Career = () => {
  return (
    <S.CareerSection>
      {careerList.map((item) => (
        <CareerContent key={item.companyName}>
          <CompanyInfo item={item} />

          <ProjectsContainer projects={item.projects} />
        </CareerContent>
      ))}

      {otherExperience.map((item, i) => (
        <CareerContent key={i}>
          <ProjectsContainer projects={item.experiences} />
        </CareerContent>
      ))}
    </S.CareerSection>
  );
};
