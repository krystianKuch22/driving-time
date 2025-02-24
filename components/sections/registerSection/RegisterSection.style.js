import styled from "styled-components";

export const StyledRegisterSection = styled.section`
  scroll-margin-top: 4em;
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 1em;
    /* padding: 0 1em; */
    background: linear-gradient(135deg, #485bff 40.03%, #a687ff 99.92%);
    color: ${(props) => props.theme.colors.registerSection.text};

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 1em;
      font-size: 0.8rem;

      h2 {
        font-size: 1.2rem;
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
      padding: 0 1em;
    }
  }

  @media (min-width: 768px) {
    .main-container {
      .text-container {
        align-items: center;
        font-size: 0.9rem;
        h2 {
          font-size: 2.5rem;
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

        h2{
          font-size: 3.5rem;
          width: 70%;
          padding-bottom: .5em;
        }

        .paragraph{
          font-size: 1.4rem;
        }
      }

      .form-container {
        width: 50%;
      }
    }
  }
`;
