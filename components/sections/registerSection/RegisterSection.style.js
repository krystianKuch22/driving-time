import styled from "styled-components";

export const StyledRegisterSection = styled.section`
  scroll-margin-top: 4em;
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    gap: 1em;
    padding: 1em 2em;
    background: linear-gradient(135deg, #485bff 40.03%, #a687ff 99.92%);
    color: ${(props) => props.theme.colors.registerSection.text};

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      width: 100%;
      gap: 1em;
      font-size: 0.8rem;

      h2 {
        font-size: 1.2rem;
        /* padding-bottom: 1em; */
      }

      .paragraph {
        display: flex;
        align-items: center;
        gap: 1.5em;
        height: 3em;
        .img-box {
          position: relative;
          width: 2em;
          height: 2em;
        }
      }
    }

    .form-container {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .main-container {

      gap: 5em;
      .text-container {
        align-items: start;
        font-size: 0.9rem;
        h2 {
          font-size: 2.5rem;
        }

        .paragraph{
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .main-container {
      padding: 0 6em;
      flex-direction: row;

      .text-container {
        align-items: start;
        gap: 2em;
        width: 50%;

        h2 {
          font-size: 3.5rem;
          width: 70%;
          padding-bottom: 0.5em;
        }

        .paragraph {
          font-size: 1.3rem;
        }
      }

      .form-container {
        width: 50%;
      }
    }
  }
`;
