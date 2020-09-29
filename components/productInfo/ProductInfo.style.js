import styled from "styled-components";

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
  background-color: ${({ rating }) =>
    rating < 60
      ? "hsl(2, 100%, 72%)"
      : rating >= 60 && rating < 80
      ? "hsl(31, 100%, 61%)"
      : "hsl(110, 77%, 69%)"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { ProductInfoList, ProductInfoListItem, Rating };
