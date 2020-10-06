import styled from 'styled-components';

const ProductInfoList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ProductInfoListItem = styled.li`
  list-style: none;
  padding: 0.1rem;
`;

const Rating = styled.span`
  min-height: 40px;
  min-width: 40px;
  border-radius: 50%;
  color: ${({ rating }) =>
    rating < 60
      ? 'hsl(2, 100%, 72%)'
      : rating >= 60 && rating < 80
      ? 'hsl(31, 100%, 61%)'
      : 'hsl(93, 88%, 36%)'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export { ProductInfoList, ProductInfoListItem, Rating };
