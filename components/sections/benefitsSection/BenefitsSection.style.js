import styled from "styled-components";

export const StyledBenefitsSection = styled.section`
  padding: 4em 2em;
  background-color: ${(props) =>
    props.theme.colors.benefitsSection.mainBackground};
  min-height: 100vh;
  margin-bottom: -1px;
  scroll-margin-top: 4em;

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
        min-height: 40em;
        border: solid 1px #a2acfe;
        padding: 1em 2em;
        font-size: 0.7rem;
        .title {
          h3 {
            font-size: 1.9rem;
          }
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
            gap: 1.5em;
            padding-left: 1em;
            color: ${(props) => props.theme.colors.benefitsSection.textColor};
            

            li {
              font-size: 0.8rem;
              
             
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .main-container .benefits-container {
      gap: 3em;
      .card {
        width: 50%;
        min-height: 55em;

        .title {
          font-size: 1.9rem;

          .card-img {
            width: 70px;
            height: 70px;
          }
        }
        .text {
          font-size: 1rem;

          ul {
            li {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    min-height: 120vh;
    padding: 4em 6em;
    scroll-margin-top: 4em;
    .main-container {
      .benefits-container {
        
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        gap: 6em;
        width: 100%;
        .card {
          width: 50%;
          /* max-height: 85em;
          min-height: 60em; */
          padding: 3em 2em;

          .text {
            ul {
              li {
                font-size: 1.1rem;
              }
            }
          }
        }
      }
    }
  }
`;
