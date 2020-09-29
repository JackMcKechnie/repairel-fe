import { ProductInfoList, ProductInfoListItem, Rating } from "./ProductInfo.style";

const ProductInfo = ({ price, name, rating }) => {
  return (
    <>
      <ProductInfoList>
        <ProductInfoListItem>{name}</ProductInfoListItem>
        <ProductInfoListItem>{`£${price}`}</ProductInfoListItem>
      </ProductInfoList>
      <Rating rating={rating}>{rating}</Rating>
    </>
  );
};

export default ProductInfo;
