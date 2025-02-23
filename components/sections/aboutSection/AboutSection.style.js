import styled from "styled-components";

export const StyledAboutSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60vh;
  padding: 0 6em;
  background: linear-gradient(135deg, #485bff 40.03%, #a687ff 99.92%);
  color: ${(props) => props.theme.colors.aboutSection.textColor};
  scroll-margin-top: 200px;

  @media (min-width: 1200px) {
    .main-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .align-container {
        width: 50%;

        .text-container {
          width: 90%;
          h2 {
            font-size: 2rem;
            padding-bottom: 0.8em;
          }
          p {
            padding-bottom: 2em;
          }
          a {
            background: none;
            padding: 1em 2em;
            border: solid 1px black;
            color: black;
          }
        }
      }

      .about-img {
        position: relative;
        width: 50%;
        height: 120%;
      }
    }
  }
`;
