import React from 'react';
import { CareerContent } from './CareerContent';
import { careerList } from './data';
import { ProjectList } from './ProjectList';
import S from './styles';

export const Career = () => {
  return (
    <S.CareerSection>
      {careerList.map((item) => (
        <CareerContent key={item.companyName}>
          <S.CompanyName>
            {item.companyName}
            <span>{item.period}</span>
          </S.CompanyName>

          <S.Position>{item.position}</S.Position>

          <p>{item.companyDescription}</p>

          {item.projects.map((project) => (
            <ProjectList key={project.name}>
              <div>
                <S.ProjectName>
                  {project.name}
                  <span>{item.period}</span>
                </S.ProjectName>

                <p>{project.description}</p>
              </div>

              <div>
                <S.ProjectSummary>작업 요약</S.ProjectSummary>
                <ul>
                  {project.details.map((details) => (
                    <li key={details}>{details}</li>
                  ))}
                </ul>
              </div>

              <div>
                <S.Skills>사용 기술</S.Skills>
                <span>{project.skills}</span>
              </div>
            </ProjectList>
          ))}
        </CareerContent>
      ))}
    </S.CareerSection>
  );
};
