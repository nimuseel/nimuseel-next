import { CareerProject } from 'interfaces/careerItem';
import React from 'react';
import { ProjectDetails } from '../ProjectDetails';
import S from './styles';

interface ProjectSummaryProps {
  project: CareerProject;
}

export const ProjectSummary = ({ project }: ProjectSummaryProps) => {
  return (
    <div>
      <S.ProjectSummary>작업 요약</S.ProjectSummary>

      <ProjectDetails project={project} />
    </div>
  );
};
