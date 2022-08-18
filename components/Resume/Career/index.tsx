import React from 'react';
import { CareerContent } from './CareerContent';
import { CompanyInfo } from './CompanyInfo';
import { careerList } from './data';
import { ProjectInfo } from './ProjectInfo';
import { ProjectList } from './ProjectList';
import { ProjectSummary } from './ProjectSummary';
import { Skills } from './Skills';
import S from './styles';

export const Career = () => {
  return (
    <S.CareerSection>
      {careerList.map((item) => (
        <CareerContent key={item.companyName}>
          <CompanyInfo item={item} />

          {item.projects.map((project) => (
            <ProjectList key={project.name}>
              <ProjectInfo project={project} />

              <ProjectSummary project={project} />

              <Skills skills={project.skills} />
            </ProjectList>
          ))}

          {item.experiences?.map((experience) => (
            <ProjectList key={experience.name}>
              <ProjectInfo project={experience} />

              <ProjectSummary project={experience} />

              <Skills skills={experience.skills} />
            </ProjectList>
          ))}
        </CareerContent>
      ))}
    </S.CareerSection>
  );
};
