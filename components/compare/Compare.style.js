import styled from 'styled-components';

const ComparisonHeader = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: max-content 3rem;
  margin: 1rem;
`;

const ComparisonGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 5rem 1fr;
  grid-template-rows: ${({ length }) => `repeat(${length}, 3rem)`};
  grid-row-gap: 2rem;
  margin: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  align-self: center;
`;
const Ethics = styled.div``;

const Circle = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${({ int }) =>
    int < 4
      ? 'hsl(2, 100%, 72%)'
      : int >= 2 && int <= 4
      ? 'hsl(31, 100%, 61%)'
      : 'hsl(93, 88%, 36%)'};
  margin: 2px;
`;

const CircleDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EthicsIcon = styled.img`
  margin: 0 auto;
  display: block;
`;
const ArrowIcon = styled.img`
  margin: 0 auto;
  display: block;
  height: 1.5rem;
  margin-top: 0.3rem;
`;
export {
  ComparisonHeader,
  Image,
  Ethics,
  Circle,
  ComparisonGrid,
  CircleDiv,
  EthicsIcon,
  ArrowIcon,
  ProductInfo,
};
