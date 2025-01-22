import styled from "styled-components";

export const StyledHeader = styled.header`
position: fixed;
width: 100%;
background-color: black;
padding: 2em 1em;
height: ${props => props.$isOpen ? "100vh" : "12vh"};
border-bottom: solid 2px #fff;
transition: height 1s;
h2{
    position: absolute;
    top: 1.5em;
    left: 1em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #fff;
}
`