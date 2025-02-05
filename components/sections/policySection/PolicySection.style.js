import styled from "styled-components";

export const StyledPolicySection = styled.section`
  padding: 2em 2em;

  ol {
    padding-left: 1em;
  }

  .boldList {
    padding-left: 1em;

    li::marker {
      font-weight: bold;
    }
  }

  h1 {
    padding: 1em 0;
  }

  h2 {
    padding: 1em 0;
  }

  h3 {
    padding: 1em 0;
  }

  p {
    padding: 0.3em 1em 0.3em 0;
    word-break: break-word;
  }
`;
