import styled from "styled-components";

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  width: 100%;

  h2 {
    font-size: 2rem;
  }

  label {
    width: 100%;
    padding: 1em 1em 1em 0;

    input {
      width: 100%;
      background: none;
      color: white;
      padding: 1em 1.5em;
      border: none;
      border-bottom: solid 1px white;

      &::placeholder {
        color: white;
      }
    }
    textArea {
      width: 100%;
      min-height: 15em;
      background: none;
      color: white;
      padding: 1em 1.5em;
      border: none;
      border-bottom: solid 1px white;

      &::placeholder {
        color: white;
      }
    }
  }
  .info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: left;
      color: white;
      font-size: 0.6rem;
    }

    .checkbox-container {
      label {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1em;
        padding-left: 0;

        p {
          font-size: 0.7rem;
        }

        input[type="checkbox"] {
          width: 59px;
          height: 20px;
          border: solid 1px white;
          padding: 0;
          background-color: ${(props) =>
            props.theme.colors.registerSection.inputBackground};
          appearance: none;
          cursor: pointer;
        }
        input[type="checkbox"]:checked {
          background-color: #001bf4; /* Kolor tła, gdy zaznaczony */
          position: relative;
        }
        input[type="checkbox"]:checked::after {
          content: "✔";
          color: white;
          font-size: 16px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  .userData {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  button {
    background: none;
    border: none;
    background-color: white;
    padding: 1em 1.5em;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    .info-container {
      p {
        font-size: 0.8rem;
      }
      .checkbox-container {
        label {
          p {
            font-size: 0.8rem;
          }
          input[type="checkbox"] {
            width: 25px;
            height: 20px;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    width: 70%;

    h2 {
      padding-bottom: 1em;
    }

    .userData {
      flex-direction: row;
    }

    .info-container {
      flex-direction: row;
      padding-top: 1em;

      .checkbox-container {
        label {
          input[type="checkbox"] {
            width: 22px;
            height: 20px;
          }
        }
      }

      button {
        width: 8em;
        height: 3em;
        font-size: 1.3rem;
      }
    }
  }
`;
