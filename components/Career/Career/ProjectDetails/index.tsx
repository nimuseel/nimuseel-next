import { CareerProject } from 'interfaces/careerItem';
import React from 'react';

interface ProjectDetailsProps {
  project: CareerProject;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <ul>
      {project.details.map((details) => (
        <li key={details}>{details}</li>
      ))}
    </ul>
  );
};
