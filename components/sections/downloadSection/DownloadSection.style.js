import styled from "styled-components";

export const StyledDownloadSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 100%;
  scroll-margin-top: 15em;
  padding: 4em 2em;

  .main-container {
    text-align: center;
    .text-container {
      padding-bottom: 2.5em;

      h2 {
        font-size: 2rem;
        color: "#11174E";
      }
    }

    .btn-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      width: 100%;

      a {
        position: relative;
        padding: 0.5em;
        /* width: 100%;
        height: 100%; */

        div {
          position: relative;
          width: 185px;
          height: 55px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 4em 2em;
    .main-container {
      .btn-container {
        /* flex-direction: row; */
        gap: 4em;

        a {
          div {
            position: relative;
            /* width: 175px; */
            /* height: 60px; */
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    min-height: 40vh;
    padding: 4em 6em;

    .main-container {
      .text-container {
        h2 {
          font-size: 3rem;
        }
      }

      .btn-container {
        flex-direction: row;
        gap: 3em;
        a {
          /* width: 14em; */
          /* height: 4em; */
        }
      }
    }
  }
`;
