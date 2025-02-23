import styled from "styled-components";

export const StyledFaqSection = styled.section`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 0 6em;
  height: 100vh;
  background: radial-gradient(
    34.27% 54.83% at 0% 50%,
    rgba(72, 91, 255, 0.5) 0%,
    rgba(72, 91, 255, 0) 100%
  );
  background-color: #040617;
  color: white;
  .main-container {
    display: flex;

    .text-container {
      display: flex;
      align-items: center;
      width: 50%;
      font-size: 2rem;
      h2 {
        width: 70%;
      }
    }

    .questions-container {
      width: 50%;
      height: 60vh;

      .question {
        .title {
          display: flex;
          /* justify-content: center; */
          gap: 1em;
          padding-bottom: 1em;
          padding-left: 1em;

          button {
            font-size: 1.2rem;
            font-weight: bold;
            background: none;
            color: #a2acfe;
            border: none;
            cursor: pointer;
            padding: 1em 2em;
          }
        }
        overflow: hidden;
        max-height: 100px;
        transition: max-height 0.7s;
        border-bottom: solid 1px #485bff;
        padding: 2em 0;

        p {
          padding-left: 1em;
        }
      }
    }
  }
`;
