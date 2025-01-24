import styled from "styled-components";

export const StyledMainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  padding-top: 5em;
  background-color: #2c2c2c;
  color: #fff;
  text-align: center;
  font-size: 1rem
  h1 {
    padding: 1em 2em;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;
