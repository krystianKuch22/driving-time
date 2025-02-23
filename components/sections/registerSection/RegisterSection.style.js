import styled from "styled-components";

export const StyledRegisterSection = styled.section`
  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 6em;
    background: linear-gradient(135deg, #485BFF 40.03%, #A687FF 99.92%);
    color: ${props => props.theme.colors.registerSection.text};


    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 3em;
      width: 50%;


      h2{
        font-size: 2rem;
        width: 50%;
      }

      .paragraph {
        display: flex;
        align-items: center;
        gap: 1em;
        height: 3em;
        .img-box {
          position: relative;
          width: 3em;
          height: 3em;
        }
      }
    }

    .form-container {
      width: 50%;
    }
  }
`;
