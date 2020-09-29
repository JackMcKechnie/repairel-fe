import styled, {keyframes} from "styled-components";

const OptionsList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`  

const OptionsItem = styled.li`
    padding: 0;
    font-size: 1.4rem;
    flex-basis: 50%;
    text-align: center;
`

const underline = keyframes`
    0% {width: 0px}
    100% {width: 100%}
`

const LinedHeading = styled.h1`
    width: 100%;
    padding-bottom: 1rem;
    position: relative;
    &::before {
        content: "";
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid black;
        animation: ${underline} 1s linear;
      }
`


export { OptionsList, OptionsItem, LinedHeading }
