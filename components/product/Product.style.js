import styled from "styled-components";

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 0.5fr));
  grid-gap: 1rem;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 353px;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export { ProductsWrapper, ProductImage, ProductInfoWrapper, ProductCard };
