import styled from "styled-components";

const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const ProductImage = styled.img`
    width: 12rem;
    height: 12rem;
`

const ProductInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 1rem 0 1rem 0; */
    width: 12rem;
`

export { ProductsWrapper, ProductImage, ProductInfoWrapper, ProductWrapper }