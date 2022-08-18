import React from 'react';
import { CareerContent } from './CareerContent';
import { CompanyInfo } from './CompanyInfo';
import { careerList } from './data';
import { ProjectInfo } from './ProjectInfo';
import { ProjectList } from './ProjectList';
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

          {item.experiences?.map((experience) => (
            <ProjectList key={experience.name}>
              <ProjectInfo project={experience} />

              <div>
                <S.ProjectSummary>요약</S.ProjectSummary>
                <ul>
                  {experience.details.map((details) => (
                    <li key={details}>{details}</li>
                  ))}
                </ul>
              </div>

              <div>
                <S.Skills>사용 기술</S.Skills>
                <span>{experience.skills}</span>
              </div>
            </ProjectList>
          ))}
        </CareerContent>
      ))}
    </S.CareerSection>
  );
};
