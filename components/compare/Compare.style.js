import styled from 'styled-components';

const ComparisonHeader = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: max-content 3rem;
  margin: 1rem;
`;

const ComparisonGrid = styled.section`
  display: grid;
  grid-template-columns: 40% 20% 40%;
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
  background-color: green;
  margin: 2px;
`;

const CircleDiv = styled.div`
  display: flex;
  align-items: center;
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
};
