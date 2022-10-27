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
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.8);

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

    &:first-of-type {
      margin-right: 20px;
    }
  }
`;

export default {
  Header,
  HeaderExtraContainer,
};
