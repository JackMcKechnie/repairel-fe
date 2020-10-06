import styled from 'styled-components';

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 0.5fr));
  grid-gap: 1rem;
  margin: 1rem;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 353px;
  filter: ${({ stock }) => (stock ? 'null' : 'grayscale(100%)')};
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const SoldOutWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 5px;

  // display: flex;
  // align-items: center;
  // justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
`;
const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const OptionsItem = styled.li`
  padding: 0;
  font-size: 1.4rem;
  flex-basis: 50%;
  text-align: center;
`;

export {
  ProductsWrapper,
  ProductImage,
  ProductInfoWrapper,
  ProductCard,
  OptionsList,
  OptionsItem,
  SoldOutWrapper,
};
