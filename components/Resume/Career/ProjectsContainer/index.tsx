import { CareerProject } from 'interfaces/careerItem';
import React from 'react';
import { ProjectInfo } from '../ProjectInfo';
import { ProjectList } from '../ProjectList';
import { ProjectSummary } from '../ProjectSummary';
import { Skills } from '../Skills';

interface ProjectsContainerProps {
  projects?: CareerProject[];
}

const ProejctsContainerDefaultProps = {
  projects: [],
};

const ProjectsContainer = ({ projects }: ProjectsContainerProps) => {
  return (
    <>
      {projects &&
        projects.map((project) => (
          <ProjectList key={project.name}>
            <ProjectInfo project={project} />

            <ProjectSummary project={project} />

            <Skills skills={project.skills} />
          </ProjectList>
        ))}
    </>
  );
};

ProjectsContainer.defaultProps = ProejctsContainerDefaultProps;

export { ProjectsContainer };
