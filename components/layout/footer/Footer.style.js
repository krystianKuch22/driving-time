import styled from "styled-components";

export const StyledFooter = styled.footer`
  .main-container {
    display: flex;
    flex-direction: column;
    /* padding: 4em 2em 2em 6em; */
    /* height: 40vh; */
    background-color: #040617;
    color: #fff;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    padding: 2em 1em;

    h2 {
      font-size: 2rem;
    }

    span {
      color: #a2acfe;
    }

    .logo-img {
      position: relative;
      width: 50px;
      height: 50px;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding-bottom: 1em;

    div {
      /* width: 20%; */
      padding: 0 1em;

      p {
        font-size: 0.8rem;
      }
    }

    .col1,
    .col2,
    .col3 {
      display: flex;
      /* flex-direction: column; */
      gap: 1em;
      font-size: 0.8rem;
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
    align-items: center;
    gap: 2em;
    padding: 1em 2em;
    font-size: 0.8rem;

    background-color: #a2acfe;
  }

  @media (min-width: 1200px) {
    .logo-container {
      justify-content: start;
      padding: 4em 6em;
      padding-bottom: 1em;

      h2 {
        font-size: 3rem;
      }

      .logo-img {
        width: 70px;
        height: 70px;
      }
    }

    .text-container {
      flex-direction: row;
      padding: 4em 6em;
      height: 25vh;

      .colDiv {
        width: 30%;

        p {
          font-size: 1rem;
        }
      }

      .deco {
        height: 100%;
        width: 20%;
        div {
          padding: 0;
          width: 1px;
        }
      }
      .col1,
      .col2,
      .col3 {
        flex-direction: column;
        justify-content: start;
        align-items: start;
        width: 20%;
        height: 100%;
        font-size: 1rem;

        .download-btn{
          color: #A2ACFE;
        }
      }
    }

    .under-footer {
      padding-right: 6em;
      font-size: 1rem;
    }
  }
`;
