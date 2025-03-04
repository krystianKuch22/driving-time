import styled from "styled-components";

export const StyledBurgerButton = styled.button`
  /* position: absolute; */
  //
  /* display: none; */
  //
  /* top: 3em; */
  /* transform: translateY(-50%); */
  /* right: 2em; */
  position: relative;
  width: 5em;
  height: 3.3em;
  padding: .8em;
  background: none;
  border: none;
  div {
    /* position: absolute; */
    /* left: 0; */
    background-color: #fff;
    width: 100%;
    height: 3px;
    border-radius: 10px;

    ${(props) =>
      props.$isOpen
        ? `
        transition: top .3s, opacity .3s, bottom .3s, transform .3s, transform .3s .3s;
        `
        : `
        transition: top .3s .3s, opacity .6s, bottom .3s .3s, transform .3s, transform .3s;
        `};
  }
  .up {
    position: relative;
    top: ${(props) => (props.$isOpen ? "0" : "-50%")};
    ${(props) =>
      props.$isOpen
        ? `
    transform: translateY(0) rotateZ(45deg);
    `
        : `
    `}
  }
  .middle {
    position: relative;
    transform: translateY(-25%);
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
  }
  .down {
    position: relative;
    bottom: ${(props) => (props.$isOpen ? "30%" : "-50%")};

    ${(props) =>
      props.$isOpen
        ? `
        transform: translateY(0) rotateZ(-45deg);
        `
        : `
        
        `}/* transform: rotateZ(-45deg); */
  }

  @media (min-width: 768px) {

    
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
