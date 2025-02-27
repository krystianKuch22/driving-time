import styled from "styled-components";

export const StyledPolicySection = styled.section`
  width: 100%;
  padding: 2em 2em;
  text-align: justify;
  color: white;

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

  @media screen and (min-width: 768px) {
    padding: 2em;

    h1 {
      padding: 1em 0;
    }

    h2 {
      padding: 1em 0;
    }

    h3 {
      padding: 1em 0;
    }
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }

`;
