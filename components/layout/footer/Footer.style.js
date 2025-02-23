import styled from "styled-components";

export const StyledFooter = styled.footer`
  .main-container {
    display: flex;
    flex-direction: column;
    padding: 4em 2em 2em 6em;
    height: 40vh;
    background-color: #040617;
    color: #fff;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding-bottom: 4em;

    h2 {
      font-size: 3rem;
    }

    span {
      color: #a2acfe;
    }

    .logo-img {
      position: relative;
      width: 70px;
      height: 70px;
    }
  }

  .text-container {
    display: flex;

    div {
      width: 20%;
    }

    .col1,
    .col2,
    .col3 {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    .deco {
      display: flex;
      justify-content: center;

      div {
        background-color: #485bff;
        width: 1px;
        height: 100%;
      }
    }
  }

  .under-footer {
    display: flex;
    justify-content: end;
    gap: 2em;
    padding: 1em 6em;
    background-color: #a2acfe;
  }
`;
