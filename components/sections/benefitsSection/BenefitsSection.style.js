import styled from "styled-components";

export const StyledBenefitsSection = styled.section`
  height: 100vh;
  padding: 8em 6em;
  background-color: ${(props) =>
    props.theme.colors.benefitsSection.mainBackground};

  @media (min-width: 1200px) {
    .main-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      .h-container {
        h2 {
          font-size: 2.5rem;
          padding-bottom: 1em;
          color: ${(props) => props.theme.colors.benefitsSection.h2};
        }
      }

      .benefits-container {
        display: flex;
        justify-content: center;
        gap: 1.5em;
        height: 100%;
        width: 100%;
        .card {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 25em;
          height: 100%;
          border: solid 1px #a2acfe;
          padding: 1em 3em;
          .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .3em;
            width: 100%;
            color: ${(props) => props.theme.colors.benefitsSection.title};
            font-size: 2rem;
            .card-img {
              position: relative;
              width: 70px;
              height: 70px;
            }
          }
          .text {
            color: ${(props) => props.theme.colors.benefitsSection.text};
            ul {
              display: flex;
              flex-direction: column;
              gap: 2em;
              color: ${(props) => props.theme.colors.benefitsSection.textColor};
            }
          }
        }
      }
    }
  }
`;
