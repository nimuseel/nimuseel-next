import styled from '@emotion/styled';

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;

    h2 {
      text-decoration: underline;
    }
  }
`;

const PublishedAt = styled.span`
  font-size: 14px;
  color: #36454f;
`;

const Title = styled.h2`
  margin: 0 0 8px;
`;

const Description = styled.span`
  font-size: 14px;
  color: #36454f;
`;

export default {
  ArticleWrapper,
  PublishedAt,
  Title,
  Description,
};
