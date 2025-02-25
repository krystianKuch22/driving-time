import styled from "styled-components";

export const StyledDemoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.demoSection.mainBackground};
  min-height: 100vh;
  padding: 0 2em;
  scroll-margin-top: 4em;

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 1000;

    .text-container {
      text-align: left;
      font-size: 0.7rem;
      color: ${(props) => props.theme.colors.demoSection.text};

      h2 {
        font-size: 1rem;
        padding-bottom: 2em;
      }

      h3 {
        font-size: .9rem;
        color: ${(props) => props.theme.colors.demoSection.title};
      }

      p{
        font-size: .8rem;
      }

      div {
        padding-bottom: 2em;
      }

      button {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        padding: 1em 2em;
        border-radius: 16px;
        border: none;
        background: linear-gradient(135deg, #485bff 40.03%, #a687ff 99.92%);
        display: none;
      }
    }

    .img-container {
      position: relative;
      display: flex;
      justify-content: start;
      width: 100%;
      height: 10em;

      .img-first {
        position: relative;
        /* position: absolute;
        left: 5%;
        top: 2em; */
        /* transform: translateY(-50%); */
        /* width: 30%;
        height: 80%; */
        width: 100%;
        height: 100%;
      }
      .img-second {
        position: relative;
        /* position: absolute;
        left: 35%;
        top: 2em; */
        /* transform: translateY(-50%); */
        /* width: 30%;
        height: 80%; */
        width: 100%;
        height: 100%;
      }
      .img-third {
        position: relative;
        /* position: absolute;
        top: 2em;
        left: 65%; */
        /* width: 30%;
        height: 80%; */
        width: 100%;
        height: 100%;
      }
    }
  }

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      31.56% 50.5% at 100% 50%,
      rgba(72, 91, 255, 0.5) 0%,
      rgba(72, 91, 255, 0) 100%
    );
  }

  @media (min-width: 768px) {
    padding: 0 2em;
    padding-bottom: 3em;

    .main-container {
      .text-container {
        font-size: 0.9rem;

        h2 {
          font-size: 2rem;
        }

        h3{
          font-size: 1.4rem;
        }

        button {
          font-size: 1rem;
        }

        p{
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 0 6em;

    .main-container {
      position: relative;
      flex-direction: row;
      height: 80%;

      .text-container {
        h2 {
          font-size: 2rem;
          padding-bottom: 1em;
        }

        h3 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1.3rem;
        }

        button {
          position: static;
          transform: translateX(0);
        }
      }

      .img-container {
        position: relative;
        height: 40em;
        width: 100%;

        .img-first {
          position: absolute;
          left: 15%;
          top: 50%;
          transform: translateY(-50%);
          width: 15em;
          height: 24em;
        }
        .img-second {
          top: 10%;
          left: 70%;
          transform: translateX(-50%);
          width: 10em;
          height: 14em;
        }
        .img-third {
          position: absolute;
          top: 30%;
          left: 60%;
          width: 30%;
          height: 80%;
        }
      }
    }
  }
`;
