import styled from "styled-components";

export const StyledTermsOfUse = styled.section`
  width: 50%;
  padding: 2em 0;

  text-align: justify;

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

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1em 0;
    text-align: left;

    h1 {
      /* padding-top: 1em; */
    }
  }
`;
