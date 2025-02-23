import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  input {
    width: 100%;
    padding: 1.5em 1.5em;
    background-color: ${(props) =>
      props.theme.colors.registerSection.inputBackground};
    border: solid 1px
      ${(props) => props.theme.colors.registerSection.inputBorder};

    &::placeholder {
      color: black;
    }
  }
  label {
    width: 100%;
  }

  input[type="checkbox"] {
    width: 32.5px;
    height: 25px;
    padding: 0;
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

  .box1 {
    display: flex;
    gap: 1em;
    width: 100%;

    .first {
      width: 35%;
    }
  }
  .box2 {
    display: flex;
    gap: 1em;
    width: 100%;
    input {
      width: 100%;
    }
  }

  .small-text {
    text-align: left;
    width: 100%;
    font-size: 0.8rem;
  }

  label {
    display: flex;
    gap: 1em;
    font-size: 0.8rem;
  }
  button {
    width: 100%;
    padding: 1.5em 0;
    color: ${(props) => props.theme.colors.registerSection.buttonText};
    background-color: ${(props) =>
      props.theme.colors.registerSection.buttonBackground};
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
  }
`;
