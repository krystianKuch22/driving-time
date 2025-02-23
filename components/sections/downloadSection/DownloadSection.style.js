import styled from "styled-components";

export const StyledDownloadSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
  width: 100%;
  scroll-margin-top: 300px;

  .main-container {
    text-align: center;
    .text-container{
        padding-bottom: 2.5em;

        h2{
            font-size: 2rem;
            color: "#11174E";
        }
    }


    
    .btn-container {
      display: flex;
      gap: 5em;
      width: 100%;

      a {
        display: block;
        position: relative;
        width: 15em;
        height: 4em;
        
      }
    }
  }
`;
