import styled from "styled-components";

export const StyledHeader = styled.header`
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.colors.menu.background};
  backdrop-filter: blur(10px);
  padding: 0 2em;
  height: ${(props) => (props.$isOpen ? "100%" : "5em")};
  transition: height 1s;
  z-index: 1500;
  overflow: hidden;

  .logo-burger-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5em;
  }

  h2 {
    /* position: absolute; */
    /* top: 1.5em; */
    /* left: 1.5em; */
    font-size: 1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #fff;

    a {
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

  .menu-btns {
    /* position: absolute; */
    /* top: 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    font-weight: bold;
    height: 80vh;
    width: 100%;
    color: ${(props) => props.theme.colors.menu.navBtnsColor};
  }

  @media (min-width: 768px) {
    
    h2 {
      font-size: 1.5rem;
      top: 1em;
      left: 1em;
    }

    .menu-btns{
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;

    padding: 0 6em;

    .logo-burger-container {
      width: 100%;
      justify-content: space-between;
      padding-right: 0 6em;
    }

    

    .menu-btns {
      /* position: static; */
      /* flex-direction: row; */
      flex-direction: row;
      justify-content: end;
      height: 2em;
      flex-shrink: 0.6;
      gap: 1.5em;

      a {
        flex-shrink: 0;
        font-size: 0.9rem;
      }

      /* display: flex;
        justify-content: center;
        gap: 3em;
        width: 60%;
        color: ${(props) => props.theme.colors.menu.navBtnsColor}; */
    }
  }
`;
