import styled from "styled-components";

export const StyledLoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 1s;
  background-color: black;

  ${(props) => {
    return props.$loading
      ? `opacity: 1;
      z-index: 2000;`
      : `opacity: 0;
    z-index:-1000;
    `;
  }}
`;
