import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  input {
    width: 100%;
    padding: 1em 1em;
    background-color: ${(props) =>
      props.theme.colors.registerSection.inputBackground};
    border: solid 1px
      ${(props) => props.theme.colors.registerSection.inputBorder};

    &::placeholder {
      color: black;
    }
  }
  label {
    position: relative;
    width: 100%;

    .error{
      position: absolute;
      bottom: 1em;
      left: 2em;
      color: red;
      font-size: .6rem;

    }

    .errorTerms{
      position: absolute;
      bottom: -2em;
      left: 0;

      color: red;
    }
  }

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0;
    width: 20px; /* Stała szerokość */
    height: 20px; /* Stała wysokość */
    display: inline-block;
    position: relative;
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

  .checkbox-container {
    position: relative;
    align-items: center;
    margin-bottom: 2em;
  }

  .box1 {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;

    .first {
      width: 100%;
    }
  }
  .box2 {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    input {
      width: 100%;
    }
  }

  .small-text {
    text-align: left;
    width: 100%;
    font-size: 0.6rem;
    padding: .5em 0;
  }

  label {
    display: flex;
    gap: 1em;
    font-size: 0.6rem;
  }
  .btn-container {
    width: 100%;
    button {
      width: 100%;
      padding: 1em 0;
      color: ${(props) => props.theme.colors.registerSection.buttonText};
      background-color: ${(props) =>
        props.theme.colors.registerSection.buttonBackground};
      font-size: 1rem;
      border-radius: 16px;
      border: none;
      cursor: pointer;

      &:disabled{
        background-color: gray;
        cursor: auto;
      }
    }
  }

  @media (min-width: 768px) {
    input[type="checkbox"] {
      width: 25px;
      height: 25px;
    }

    .small-text {
      font-size: 0.8rem;
    }

    label {
      p {
        font-size: 0.8rem;
      }
    }

    .box1 {
      flex-direction: row;

      .first {
        width: 35%;
      }
    }

    .box2 {
      flex-direction: row;
    }

    .btn-container {
      display: flex;
      justify-content: center;  
      width: 100%;
      button {
        
        /* width: 50%; */
      }
    }
  }

  @media (min-width: 1200px) {
    input {
      padding: 2em 1.5em;
    }

    button {
      font-size: 1.5rem;
    }
  }
`;
