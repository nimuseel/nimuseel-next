import styled from '@emotion/styled';

const Layout = styled.main`
  margin: 66px auto 20px;
  padding: 20px;
  max-width: 820px;

  div[role='section'] + div[role='section'] {
    margin-top: 18px;
  }

  footer {
    margin-top: 20px;
  }
`;

export default {
  Layout,
};
