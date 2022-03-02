import styled from '@emotion/styled';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  padding: 20px 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 5%);

  .logo {
    color: black;
  }

  a {
    text-decoration: none;
  }
`;

const HeaderExtraContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #818589;

    &:first-child {
      margin-right: 20px;
    }
  }
`;

export default {
  Header,
  HeaderExtraContainer,
};
