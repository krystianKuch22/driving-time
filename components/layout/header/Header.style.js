import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.colors.menu.background};
  backdrop-filter: blur(10px);
  padding: 2em 6em;
  height: ${(props) => (props.$isOpen ? "100%" : "10%")};
  transition: height 1s;
  z-index: 1500;

  h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #fff;

    .second-part {
      color: #a2acfe;
    }

    .logo-link {
      display: flex;
      gap: 0.2em;
    }
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    .menu-btns {
        display: flex;
        justify-content: center;
        gap: 3em;
        width: 60%;
        color: ${props => (props.theme.colors.menu.navBtnsColor)};
    }
  }
`;
