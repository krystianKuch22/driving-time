import styled from "styled-components";

export const StyledFaqSection = styled.section`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 3em 2em;
  min-height: 100vh;
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
        padding-bottom: 2em;
      }
    }

    .questions-container {
      /* width: 50%; */
      /* height: 60vh; */

      .question {
        /* background-color: #fff; */
        overflow: hidden;
        /* max-height: 400px; */
        transition: height 0.7s;
        border-bottom: solid 1px #485bff;
        /* padding-top: 4em; */
        height: 1.5rem;
        margin-top: 1em;
        .title {
          display: flex;
          justify-content: center;
          width: 100%;

          button {
            display: flex;
            justify-content: space-between;
            width: 100%;
            /* height: 3em; */
            font-size: 1rem;
            font-weight: bold;
            background: none;
            color: #a2acfe;
            border: none;
            z-index: 1000;
            cursor: pointer;
            /* padding: 1em 2em; */
          }
        }

        p {
          font-size: 0.8rem;
          padding-bottom: 1em;
        }
      }
    }
  }

  @media (min-width: 768px) {
    min-height: 100vh;

    .main-container {
      .text-container {
        width: 100%;
        justify-content: start;
        h2 {
          
          font-size: 2rem;
        }
      }

      .questions-container {
        .question {
          .title {
            justify-content: center;
            button {
              p {
                font-size: 1.4rem;
              }
            }
          }
          p {
            font-size: 1.2rem;
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
        width: 70%;

        h2 {
          font-size: 2.5rem;
          width: 70%;
          padding-bottom: 0;
        }
      }

      .questions-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* width: 30%; */

        .question {
          width: 70%;
          

          .title {
            button {
              font-size: 1.7rem;
              padding-left: .5em;
              padding-right: .5em;
            }
          }

          p{
            font-size: 1.3rem;
          }
        }
      }
    }
  }
`;
