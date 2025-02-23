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
    align-items: center;

    p{
      text-align: left;
      color: white;
      font-size: .8rem;
    }
    

    .checkbox-container {
      label {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1em;
        padding-left: 0;

        input[type="checkbox"] {
          width: 29px;
          height: 22px;
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
    width: 100%;
  }

  button {
    background: none;
    border: none;
    background-color: white;
    padding: 1em 2em;
    border-radius: 8px;
    width: 20%;
    height: 100%;
    color: black;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    width: 70%;
  }
`;
