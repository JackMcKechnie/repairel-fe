import Link from 'next/link';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  ProductsWrapper,
  ProductCard,
  ProductImage,
  ProductInfoWrapper,
  OptionsItem,
  OptionsList,
  SoldOutWrapper,
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
              <ProductImage
                key={product.id}
                stock={product.stock}
                src={product.images[0].url}
              />
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
              <ProductImage key={product.id} src={product.images[0].url} />
              <SoldOutWrapper>Sold Out</SoldOutWrapper>
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
          <OptionsItem>Compare</OptionsItem>
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
        </OptionsList>
        {toggleFilter && <Filter />}
        <ProductsWrapper>
          <InfiniteScroll
            dataLength={products.length}
            next={() => setCount((count += 20))}
            style={{
              width: 'calc(100vw - 2rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 0.5fr))',
              gridGap: '1rem',
            }}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            scrollableTarget='scrollableDiv'
          >
            {productRender(products)}
          </InfiniteScroll>
        </ProductsWrapper>
      </section>
    )
  );
};

ProductList.propTypes = {
  list: PropTypes.array,
};

export default ProductList;
