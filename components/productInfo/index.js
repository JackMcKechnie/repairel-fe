import { ProductInfoList, ProductInfoListItem } from "./ProductInfo.style";

const ProductInfo = ({ price, name, rating }) => {
  return (
    <>
      <ProductInfoList>
        <ProductInfoListItem>{name}</ProductInfoListItem>
        <ProductInfoListItem>{`£${price}`}</ProductInfoListItem>
      </ProductInfoList>
      <p>{rating}</p>
    </>
  );
};

export default ProductInfo;
