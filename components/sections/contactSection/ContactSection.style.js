import styled from "styled-components";

export const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #485bff 40.03%, #a687ff 99.92%);
  text-align: center;
  padding: 2em 0;
  scroll-margin-top: 4em;

  h2 {
    padding: 0 1em;
    color: #fff;
  }
  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;
