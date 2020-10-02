import Link from 'next/link';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  ProductsWrapper,
  ProductCard,
  ProductImage,
  ProductInfoWrapper,
} from './ProductList.style';

import ProductInfo from '@components/productInfo';

const ProductList = ({ list }) => {
  const [products, setProducts] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  let [count, setCount] = React.useState(0);

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
      return (
        <Link
          key={product.id}
          href={`/product/[id]`}
          as={`/product/${product.id}`}
        >
          <ProductCard key={product.id}>
            <ProductImage key={product.id} src={product.images[0].url} />
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
    });
  };

  return (
    products.length !== 0 && (
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
    )
  );
};

ProductList.propTypes = {
  list: PropTypes.array,
};

export default ProductList;
