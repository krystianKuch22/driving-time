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

    input {
      width: 100%;
      background-color: #4c4c4c;
      color: #fff;
      padding: 1em 1.5em;
      border: none;
      border-radius: 8px;
    }
  }

  button {
    background: none;
    border: none;
    background-color: #0c0c0c;
    padding: 1em 2em;
    border-radius: 8px;
    color: #fff;
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;
