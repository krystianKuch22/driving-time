import styled from "styled-components";

export const StyledMainSection = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 2.5em;
  background-color: ${(props) => props.theme.colors.mainSection.mainBackground};
  color: white;

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

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;

    .main-container {
      display: flex;
      width: 100%;
      height: 50vh;
      z-index: 1000;

      .align-container {
        display: flex;
        align-items: center;
        width: 50%;
      }

      .text-container {
        text-align: left;
        width: 90%;

        h1 {
          color: ${(props) => props.theme.colors.mainSection.h1Color};
          padding-bottom: 0.3em;
        }

        h2 {
          font-size: 1.6rem;
          padding-bottom: 1em;
        }
        p {
          font-size: 1.3rem;
          padding-bottom: 2em;
        }

        a{
          background: linear-gradient(135deg, #485bff 40.03%, #a687ff 99.92%);
          border: none;
          padding: 1em 2em;
          color: ${(props) => props.theme.colors.mainSection.buttonColor};
          font-size: 1rem;
        }
      }

      .main-img {
        position: relative;
        width: 50%;
      }
    }
  }
`;
