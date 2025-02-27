import styled from "styled-components";

export const StyledTermsOfUse = styled.section`
  padding: 8em 2em;

  text-align: justify;

  /* color: white; */
  h1 {
    text-align: center;
    padding-bottom: 1em;
  }

  h3 {
    padding: 1em 0;
  }

  ol li {
    padding-top: 0.2em;
  }

  .firstList {
    padding-left: 1em;

    ol {
      padding-left: 1em;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8em 2em;
    text-align: left;

    h1 {
      /* padding-top: 1em; */
    }
  }

  @media screen and (min-width: 1200px) {
    width: 70%;

  }
`;
