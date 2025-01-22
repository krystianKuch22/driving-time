import styled from "styled-components";

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  width: 100%;

  label {
    width: 100%;
    padding: 1em;

    input {
      width: 100%;
      background-color: #4c4c4c;
      color: #fff;
      padding: 1em 1.5em;
      border: none;
      border-radius: 8px;
    }
    textArea {
      width: 100%;
      background-color: #4c4c4c;
      color: #fff;
      padding: 1em 1.5em;
      border: none;
      border-radius: 8px;
    }
  }

  .userData {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  button{
    background: none;
    border: none;
    background-color: #0c0c0c;
    padding: 1em 2em;
    border-radius: 8px;
    color: #fff;
  }
`;
