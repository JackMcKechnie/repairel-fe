import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollStyled = styled(InfiniteScroll)`
  margin: 1rem;
  width: calc(100% - 2rem);
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  @media (min-width: 750px) {
    grid-template-columns: 0.5fr 0.5fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const ProductCard = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
`;
const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const OptionsItem = styled.li`
  padding: 0;
  font-size: 1.3rem;
  flex-basis: 50%;
  text-align: center;
  font-weight: bold;
`;

export {
  ProductImage,
  ProductInfoWrapper,
  ProductCard,
  OptionsList,
  OptionsItem,
  SoldOutWrapper,
  ImageWrapper,
  InfiniteScrollStyled,
};
