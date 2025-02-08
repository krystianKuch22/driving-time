import styled from "styled-components";

export const StyledPolicySection = styled.section`
  width: 50%;
  padding: 2em 2em;
  text-align: justify;

  ol {
    padding-left: 1em;
  }

  .boldList {
    padding-left: 1em;
  }

  h1 {
    min-height: 40px;
    padding: 1em 0;
    text-align: center;
  }

  h2 {
    font-size: 1.2rem;
    padding: 1em 0;
    text-align: center;
  }

  h3 {
    font-size: 1rem;
    padding: 1em 0;
  }

  p {
    padding: 0.3em 1em 0.3em 0;
    word-break: break-word;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    width: 100%;
  }

  h1{
    padding: 1em 0;
  }

  h2{
    padding: 1em 0;
  }

  h3{
    padding: 1em 0;
  }
`;
