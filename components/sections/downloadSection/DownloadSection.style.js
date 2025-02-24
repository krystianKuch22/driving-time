import styled from "styled-components";

export const StyledDownloadSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  scroll-margin-top: 15em;

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
      flex-direction: column;
      align-items: center;
      gap: 1em;
      width: 100%;

      a {
        display: block;
        position: relative;
        width: 8em;
        height: 3.5em;
        
      }
    }
  }

  @media (min-width: 768px) {

    .main-container{

      .btn-container{
        flex-direction: row;

        a{
            width: 11em;
            height: 3.2em;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    height: 40vh;
    
    .main-container{

      .text-container{
        h2{
          font-size: 3rem;
        }
      }

      .btn-container{
        gap: 8em;
        a{
          width: 14em;
          height: 4em;
        }
      }
    }
  }


`;
