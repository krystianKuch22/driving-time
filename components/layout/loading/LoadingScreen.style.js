import styled from "styled-components";

export const StyledLoadingScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: all 2s;
  background-color: black;

  ${(props) => {
    return props.$loading
      ? `opacity: 1;
      z-index: 1000;`
      : `opacity: 0;
    z-index:-1000;
    `;
  }}
`;
