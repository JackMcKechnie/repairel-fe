import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  ProductCard,
  ProductImage,
  ProductInfoWrapper,
  OptionsItem,
  OptionsList,
  SoldOutWrapper,
  ImageWrapper,
  InfiniteScrollStyled,
} from './ProductList.style';

import ProductInfo from '@components/productInfo';
import Filter from '@components/filter';

const ProductList = ({ list }) => {
  const [products, setProducts] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  let [count, setCount] = React.useState(0);
  const [toggleFilter, setToggleFilter] = React.useState(false);

  React.useEffect(() => {
    let productArray = [];
    for (var i = count; i < count + 20; i++) {
      if (i >= list.length) {
        setHasMore(false);
      } else {
        productArray.push(list[i]);
        setProducts(products.concat(productArray));
      }
    }
  }, [count]);

  const productRender = (products) => {
    return products.map((product) => {
      if (product.stock) {
        return (
          <Link
            key={product.id}
            href={`/product/[id]`}
            as={`/product/${product.id}`}
          >
            <ProductCard key={product.id}>
              <ImageWrapper>
                <ProductImage
                  loading='lazy'
                  key={product.id}
                  stock={product.stock}
                  src={product.images[0].url}
                />
              </ImageWrapper>
              <ProductInfoWrapper>
                <ProductInfo
                  key={product.id}
                  price={product.price}
                  name={product.name}
                  rating={product.rating}
                />
              </ProductInfoWrapper>
            </ProductCard>
          </Link>
        );
      } else {
        return (
          <Link
            key={product.id}
            href={`/product/[id]`}
            as={`/product/${product.id}`}
          >
            <ProductCard key={product.id}>
              <ImageWrapper>
                <ProductImage
                  loading='lazy'
                  key={product.id}
                  src={product.images[0].url}
                />
                <SoldOutWrapper>Sold Out</SoldOutWrapper>
              </ImageWrapper>
              <ProductInfoWrapper>
                <ProductInfo
                  key={product.id}
                  price={product.price}
                  name={product.name}
                  rating={product.rating}
                />
              </ProductInfoWrapper>
            </ProductCard>
          </Link>
        );
      }
    });
  };
  return (
    products.length !== 0 && (
      <section>
        <OptionsList>
          <OptionsItem
            onClick={() => setToggleFilter(!toggleFilter)}
            style={
              toggleFilter
                ? { textDecoration: 'underline', cursor: 'pointer' }
                : { textDecoration: 'none', cursor: 'pointer' }
            }
          >
            Filter
          </OptionsItem>
          <OptionsItem>Compare</OptionsItem>
        </OptionsList>
        {toggleFilter && <Filter />}
        <InfiniteScrollStyled
          dataLength={products.length}
          next={() => setCount((count += 20))}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget='scrollableDiv'
        >
          {productRender(products)}
        </InfiniteScrollStyled>
      </section>
    )
  );
};

ProductList.propTypes = {
  list: PropTypes.array,
};

export default ProductList;
