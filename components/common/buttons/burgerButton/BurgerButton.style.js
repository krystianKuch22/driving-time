import styled from "styled-components";

export const StyledBurgerButton = styled.button`
  position: absolute;
  top: 2em;
  right: 1.5em;
  width: 4em;
  height: 2.5em;
  padding: 1em;
  background: none;
  border: none;
  div {
    position: absolute;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 5px;
    border-radius: 10px;

    ${(props) =>
      props.$isOpen
        ? `
        transition: top 1s, opacity 1s, bottom 1s, transform .3s, transform .5s .5s;
        `
        : `
        transition: top 1s, opacity 1s, bottom 1s, transform 1s, transform .3s;
        `};
  }
  .up {
    position: absolute;
    top: ${(props) => (props.$isOpen ? "50%" : "0")};
    ${(props) =>
      props.$isOpen
        ? `
    transform: translateY(-50%) rotateZ(45deg);
    `
        : `
    `}
  }
  .middle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
  }
  .down {
    position: absolute;
    bottom: ${(props) => (props.$isOpen ? "50%" : "0")};

    ${(props) =>
      props.$isOpen
        ? `
        transform: translateY(50%) rotateZ(-45deg);
        `
        : `
        
        `}/* transform: rotateZ(-45deg); */
  }
`;
