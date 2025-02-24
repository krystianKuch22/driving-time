import styled from "styled-components";

export const StyledFaqSection = styled.section`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 3em 1em;
  /* height: 100vh; */
  background: radial-gradient(
    34.27% 54.83% at 0% 50%,
    rgba(72, 91, 255, 0.5) 0%,
    rgba(72, 91, 255, 0) 100%
  );
  background-color: #040617;
  color: white;
  scroll-margin-top: 4em;
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-container {
      display: flex;
      align-items: center;
      /* width: 50%; */
      font-size: 2rem;
      h2 {
        /* padding-top: 2em; */
        font-size: 1.5rem;
      }
    }

    .questions-container {
      /* width: 50%; */
      /* height: 60vh; */

      .question {
        .title {
          display: flex;
          /* justify-content: center; */
          gap: 1em;

          button {
            height: 3em;
            font-size: 1rem;
            font-weight: bold;
            background: none;
            color: #a2acfe;
            border: none;
            cursor: pointer;
            /* padding: 1em 2em; */
          }
        }
        overflow: hidden;
        /* max-height: 400px; */
        transition: max-height 0.7s;
        border-bottom: solid 1px #485bff;
        padding-top: 4em;

        p {
          font-size: 0.8rem;
          padding-bottom: 1em;
        }
      }
    }
  }

  @media (min-width: 768px) {
    height: 100vh;

    .main-container {
      .text-container {
        h2 {
          font-size: 2rem;
        }
      }

      .questions-container {
        .question {
          .title {
            justify-content: center;
            button {
              font-size: 1.1rem;
            }
          }
          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    padding: 0 6em;
    .main-container {
      flex-direction: row;

      .text-container {
        width: 50%;

        h2 {
          font-size: 2.5rem;
          width: 70%;
        }
      }

      .questions-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* width: 30%; */

        .question {
          width: 70%;
          padding-bottom: 4em;

          .title {
            button {
              font-size: 1.7rem;
            }
          }
        }
      }
    }
  }
`;
