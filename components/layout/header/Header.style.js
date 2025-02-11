import styled from "styled-components";

export const StyledHeader = styled.header`
position: fixed;
width: 100%;
background-color: black;
padding: 2em 1em;
height: ${props => props.$isOpen ? "100%" : "12%"};
border-bottom: solid 2px #fff;
transition: height 1s;


h2{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #fff;
}

@media (min-width: 768px) {
    
}

@media (min-width: 1200px) {
    
}
`