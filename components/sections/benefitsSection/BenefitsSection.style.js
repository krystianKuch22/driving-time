import styled from "styled-components";

export const StyledBenefitsSection = styled.section`
  padding: 6em 1em;
  background-color: ${(props) =>
    props.theme.colors.benefitsSection.mainBackground};

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .h-container {
      h2 {
        font-size: 2.5rem;
        padding-bottom: 1em;
        color: ${(props) => props.theme.colors.benefitsSection.h2};
      }
    }

    .benefits-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5em;
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25em;
        border: solid 1px #a2acfe;
        padding: 1em 2em;
        font-size: 0.7rem;
        .title {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5em;
          width: 100%;
          color: ${(props) => props.theme.colors.benefitsSection.title};
          font-size: 1rem;
          padding-bottom: 1em;
          .card-img {
            position: relative;
            width: 50px;
            height: 50px;
          }
        }
        .text {
          color: ${(props) => props.theme.colors.benefitsSection.text};
          ul {
            display: flex;
            flex-direction: column;
            gap: 2em;
            padding-left: 1em;
            color: ${(props) => props.theme.colors.benefitsSection.textColor};
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    

    .main-container .benefits-container {
      .card {
        width: 35em;

        .title{
          font-size: 1.5rem;

          .card-img{
            width: 70px;
            height: 70px;
          }
        }
        .text {
          font-size: 1rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .main-container{
      .benefits-container{
        flex-direction: row;
        .card{
          padding: 3em 2em;
        }
      }
    }
  }
`;
