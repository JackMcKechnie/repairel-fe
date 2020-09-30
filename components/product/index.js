const Product = () => {
  return (
    <div className='product'>
      <h2 className='product__title'>Doc Marten</h2>
      <p className='product__description'>Very nice shoes!</p>
      {/* <img src={product.image} alt='' /> */}
      <div className='product__price-button-container'>
        <div className='product__price'>40</div>
        <button
          className='snipcart-add-item product__button'
          data-item-id={4}
          data-item-name={'Chelsea Boots'}
          data-item-price={40}
          // data-item-url={router.pathname}
          // data-item-image={product.image}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
