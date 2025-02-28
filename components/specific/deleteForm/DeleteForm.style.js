import styled from "styled-components";

export const StyledDeleteForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;
  padding: 0 2em;

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
      max-width: 100%;
      min-width: 100%;

      &::placeholder {
        color: white;
      }
    }
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

  .accountDelete {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1em;

    h1 {
      text-align: left;
    }
  }

  @media (min-width: 768px) {
    width: 80%;

    button {
      width: 50%;
    }
  }

  @media (min-width: 1200px) {
    width: 60%;
    button {
      width: 30%;
    }
  }
`;
