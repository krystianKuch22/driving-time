import styled from "styled-components";

export const StyledHeader = styled.header`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.colors.menu.background};
  backdrop-filter: blur(10px);
  padding: 0 1em;
  height: ${(props) => (props.$isOpen ? "100%" : "5em")};
  transition: height 1s;
  z-index: 1500;
  overflow: hidden;

  h2 {
    position: absolute;
    top: 1.5em;
    left: 1.5em;
    font-size: 1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #fff;

    a{
      display: flex;
      align-items: center;
    }

    .second-part {
      color: #a2acfe;
    }

    .logo-link {
      display: flex;
      gap: 0.2em;
    }
  }

  .menu-btns{
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    font-weight: bold;
    justify-content: center;
    height: 100vh;
    color: ${props => (props.theme.colors.menu.navBtnsColor)};
  }

  @media (min-width: 768px) {

    h2{
      font-size: 1.5rem;
      top: 1em;
      left: 1em;
    }
  }

  @media (min-width: 1200px) {
    justify-content: end;
    padding-right: 6em;

    h2{
      left: 4em;
    }

    .menu-btns {
      position: static;
      flex-direction: row;
      height: auto;
      gap: 2em;
      
        /* display: flex;
        justify-content: center;
        gap: 3em;
        width: 60%;
        color: ${props => (props.theme.colors.menu.navBtnsColor)}; */
    }
  }
`;
