import { CareerProject } from 'interfaces/careerItem';
import React from 'react';
import S from './styles';

interface ProjectSummaryProps {
  project: CareerProject;
}

export const ProjectSummary = ({ project }: ProjectSummaryProps) => {
  return (
    <div>
      <S.ProjectSummary>작업 요약</S.ProjectSummary>
      <ul>
        {project.details.map((details) => (
          <li key={details}>{details}</li>
        ))}
      </ul>
    </div>
  );
};
