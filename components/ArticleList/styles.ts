import styled from '@emotion/styled';

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  &:hover {
    cursor: pointer;

    h2 {
      text-decoration: underline;
    }
  }
`;

const DateAndCategory = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    color: #36454f;
  }
`;

const Divider = styled.div`
  height: 12px;
  width: 1px;
  background-color: rgba(0, 0, 0, 20%);
  margin: 0 12px;
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
  DateAndCategory,
  Divider,
  Title,
  Description,
};
