import styled from "styled-components";

export const StyledAboutSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  /* height: 60vh; */
  padding: 2em 1em;
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

        padding-bottom: 5em;
        h2 {
          font-size: 1rem;
          padding-bottom: 0.8em;
        }
        p {
          padding-bottom: 2em;
          font-size: 0.8rem;
        }
        a {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background: none;
          padding: 1em 2em;
          font-size: 0.8rem;
          border: solid 1px black;
          color: black;
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
    height: 100vh;
    padding: 2em 2em;
    align-items: center;

    .main-container {
      .align-container {
        .text-container {
          h2 {
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
          }
          a {
            font-size: 1rem;
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
    height: 60vh;
    padding: 0 6em;
    scroll-margin-top: 12em;
    .main-container {
      flex-direction: row;
      height: 100%;

      .align-container {
        width: 50%;

        .text-container {
          h2 {
            font-size: 2rem;
          }

          p {
            font-size: 1.2rem;
          }
          a {
            position: static;
          }
        }
      }

      .about-img {
        width: 60%;
        height: 120%;
      }
    }
  }
`;
