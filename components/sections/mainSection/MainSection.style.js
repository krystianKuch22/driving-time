import styled from "styled-components";

export const StyledMainSection = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 110vh;
  padding: 0 2em;
  background-color: ${(props) => props.theme.colors.mainSection.mainBackground};
  color: white;

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    width: 100%;
    /* height: 50vh; */
    z-index: 1000;

    .align-container {
      display: flex;
      align-items: center;
      /* width: 50%; */
    }

    .text-container {
      /* text-align: center; */
      /* width: 90%;*/

      h1 {
        color: ${(props) => props.theme.colors.mainSection.h1Color};
        padding-bottom: 0.3em;
        font-size: 2.5rem;
      }

      h2 {
        font-size: 1rem;
        padding-bottom: 1em;
      }
      p {
        font-size: 0.8rem;
        padding-bottom: 2em;
      }

      .btn-container {
        display: flex;
        a {
          background: linear-gradient(135deg, #485bff 40.03%, #a687ff 99.92%);
          border: none;
          border-radius: 16px;
          padding: 1em 2em;
          color: ${(props) => props.theme.colors.mainSection.buttonColor};
          font-size: 1rem;
        }
      }
    }

    .main-img {
      position: relative;
      width: 100%;
      height: 14em;
    }
  }

  .top-gradient {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      60.31% 40.44% at 50% 0%,
      rgba(72, 91, 255, 0.5) 0%,
      rgba(72, 91, 255, 0) 100%
    );
  }

  .bottom-gradient {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      60.31% 40.44% at 50% 100%,
      rgba(154, 72, 255, 0.3) 0%,
      rgba(154, 72, 255, 0) 90%
    );
  }

  @media (min-width: 650px) {
    padding: 6em 2em;
  }

  @media (min-width: 768px) {
    padding-top: 6em;
    padding-bottom: 4em;
    width: 100%;

    .main-container {
      .text-container {
        display: flex;
        flex-direction: column;
        h1 {
          font-size: 4rem;
        }

        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 1.2rem;
        }

        .btn-container {
          width: 100%;
          a {
            display: block;
            text-align: center;
            width: 50%;
            font-size: 1.4rem;
          }
        }
      }

      .main-img {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 0 4em;
    height: 100vh;
    .main-container {
      flex-direction: row;

      .align-container {
        width: 100%;
      }

      .text-container {
        text-align: left;

        h1 {
          font-size: 4rem;
        }

        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 1.3rem;
        }
      }

      .main-img {
        font-size: 2.5rem;
      }
    }
  }
`;
