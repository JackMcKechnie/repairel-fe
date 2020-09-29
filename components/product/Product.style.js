import styled from "styled-components";

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 0.5fr));
  grid-gap: 1rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export { ProductsWrapper, ProductImage, ProductInfoWrapper, ProductWrapper };
