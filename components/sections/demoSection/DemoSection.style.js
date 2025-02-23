import styled from "styled-components";

export const StyledDemoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.demoSection.mainBackground};
  height: 100vh;
  padding: 0 6em;

  @media (min-width: 1200px) {
    .main-container {
      display: flex;
      width: 100%;
      z-index: 1000;

      .text-container {
        width: 50%;
        color: ${(props) => props.theme.colors.demoSection.text};

        h2 {
          font-size: 2rem;
          padding-bottom: 2em;
        }

        h3 {
          color: ${(props) => props.theme.colors.demoSection.title};
        }

        div {
          padding-bottom: 2em;
        }

        button {
          padding: 1em 2em;
          border: none;
          background: linear-gradient(135deg, #485bff 40.03%, #a687ff 99.92%);
        }
      }

      .img-container {
        position: relative;
        width: 50%;

        .img-first {
          position: absolute;
          left: 4em;
          top: 50%;
          transform: translateY(-50%);
          width: 40%;
          height: 60%;
        }
        .img-second {
          position: absolute;
          top: 0;
          left: 50%;
          width: 20%;
          height: 30%;
        }
        .img-third {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 30%;
          height: 50%;
        }
      }
    }
  }

  .gradient{
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(31.56% 50.5% at 100% 50%, rgba(72, 91, 255, 0.5) 0%, rgba(72, 91, 255, 0) 100%);

  }
`;
