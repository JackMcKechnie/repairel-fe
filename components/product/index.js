import PropTypes from 'prop-types';
import { Rating } from '@components/productInfo/ProductInfo.style';
import Slider from './Slider';

import { AddToCart, MainInfo } from './Product.style'

const Product = ({ product, url }) => {
  return (
    <>
      <Slider images={product.images} />
      <div
        className='product'
        style={{
          padding: '1rem',
        }}
      >
        <MainInfo>
          <div>
            <h2 className='product__title'>{product.name}</h2>
            <p className='product__price'>{product.price}</p>
          </div>
          <Rating rating={product.rating}>{product.rating}</Rating>
        </MainInfo>
        <div className='product__price-button-container'>
          <AddToCart
            className='snipcart-add-item product__button'
            data-item-id={product.id}
            data-item-name={product.name}
            data-item-price={product.price}
            data-item-url={`https://a4df99a375a4.ngrok.io${url}`}
            data-item-image={product.images[0].url}
          >
            Add to cart
          </AddToCart>
        </div>
        <h4>Description</h4>
        <p className='product__description'>{product.description}</p>
        <h4>Sustainability and ethics</h4>
        <div>
          <p>
            Vegan: <span>{product.ethics_and_sustainability.vegan}</span>
          </p>
          <p>
            Wages: <span>{product.ethics_and_sustainability.wages}</span>
          </p>
          <p>
            Recyclability:{' '}
            <span>{product.ethics_and_sustainability.recyclability}</span>
          </p>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  url: PropTypes.string,
};
export default Product;
