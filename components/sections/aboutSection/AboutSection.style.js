import styled from "styled-components";

export const StyledAboutSection = styled.section`
  display: flex;
  justify-content: center;
  /* width: 100%; */
  min-height: 80vh;
  padding: 2em 2em;
  background: linear-gradient(135deg, #485bff 40.03%, #a687ff 99.92%);
  color: ${(props) => props.theme.colors.aboutSection.textColor};
  scroll-margin-top: 4em;

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .align-container {
      /* width: 50%; */

      .text-container {
        /* width: 90%; */

        padding-bottom: 3em;
        h2 {
          font-size: 1rem;
          padding-bottom: 0.8em;
        }
        p {
          padding-bottom: 2em;
          font-size: 0.8rem;
        }
        .btn-container {
          display: flex;
          justify-content: center;
          a {
            /* position: absolute; */
            /* left: 50%; */
            /* transform: translateX(-50%); */
            background: none;
            padding: 1em 2em;
            font-size: 1rem;
            border-radius: 16px;
            border: solid 1px black;
            color: black;
          }
        }
      }
    }

    .about-img {
      position: relative;
      width: 80%;
      height: 17em;
    }
  }

  @media (min-width: 768px) {
    min-height: 100vh;
    padding: 2em 2em;
    align-items: center;

    .main-container {
      .align-container {
        .text-container {
          height: auto;
          h2 {
            font-size: 2rem;
          }
          p {
            font-size: 1.2rem;
          }
          a {
            font-size: 1.4rem;
          }
        }
      }

      .about-img {
        width: 90%;
        height: 20em;
      }
    }
  }

  @media (min-width: 1200px) {
    min-height: 40vh;
    padding: 2em 6em;
    scroll-margin-top: 12em;
    .main-container {
      flex-direction: row;
      justify-content: space-between;
      height: 100%;

      .align-container {
        width: 40%;

        .text-container {
          padding-bottom: 1em;
          h2 {
            font-size: 2rem;
          }

          p {
            font-size: 1.3rem;
          }
          a {
            position: static;
          }

          .btn-container{
            a{
              font-size: 1.4rem;
            }
          }
        }
      }

      .about-img {
        position: absolute;
        right: 0;
        width: 50%;
        height: 75vh;
      }
    }
  }
`;
