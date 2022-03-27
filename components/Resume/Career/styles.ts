import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CareerSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const companyAndProjectPeriod = css`
  span {
    font-size: 14px;
    margin-left: 8px;
    color: gray;
  }
`;

const CompanyName = styled.h2`
  margin: 0;
  ${companyAndProjectPeriod}
`;

const Position = styled.p`
  margin-bottom: 8px;
`;

const ProjectName = styled.h3`
  margin: 0;

  ${companyAndProjectPeriod}
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
  CompanyName,
  Position,
  ProjectName,
  ProjectSummary,
  Skills,
};
