import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CareerSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const CompanyAndProjectPeriod = css`
  span {
    font-size: 14px;
    margin-left: 8px;
    color: gray;
  }
`;

const ProjectSummary = styled.p`
  margin: 0;
  font-size: 17px;
  color: #000;
  font-weight: bold;
`;

const Skills = styled.p`
  margin: 0;
  font-size: 17px;
  color: #000;
  font-weight: bold;
`;

export default {
  CareerSection,
  ProjectSummary,
  Skills,
};
