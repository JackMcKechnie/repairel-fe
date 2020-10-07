import PropTypes from 'prop-types';

import {
  ProductInfoList,
  ProductInfoListItem,
  Rating,
} from './ProductInfo.style';

const ProductInfo = ({ price, name, rating }) => {
  return (
    <>
      <ProductInfoList>
        <ProductInfoListItem>{name}</ProductInfoListItem>
        <ProductInfoListItem>{`£ ${price}`}</ProductInfoListItem>
      </ProductInfoList>
      <Rating rating={rating}>{rating}</Rating>
    </>
  );
};

ProductInfo.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string,
  rating: PropTypes.number,
};

export default ProductInfo;
