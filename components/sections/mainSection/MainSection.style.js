import styled from "styled-components";

export const StyledMainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  padding: 8em 1em;
  padding-top: 15em;
  background-color: #2c2c2c;
  color: #fff;
  text-align: center;
  font-size: 1rem
  h1 {
    padding: 1em 2em;
  }

  @media (min-width: 768px) {
    padding-top: 10em;
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;
