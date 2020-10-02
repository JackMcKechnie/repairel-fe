import styled from "styled-components";

const MainInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
`

const AddToCart = styled.button`
    width: 4rem;
    max-width: 100%;
    display: inline-block;
    background: white;
    color: black;
    border: 3px solid black;
    height: auto;
    width: auto;
    padding: 0.6em 3em;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: 1px;
    vertical-align: top;
    border-radius: 0;
    cursor: pointer;
    transition: color 150ms, background-color 150ms;
    &:hover {
        color: white;
        background-color: black
    }
`

const SliderImage = styled.img`
  max-width: 400px;
  margin-right: 0.5rem;
  max-height: 400px;
`;

const SliderContainer = styled.div`
  display: flex;
  overflow: scroll;
`;

export { AddToCart, SliderImage, SliderContainer, MainInfo };
