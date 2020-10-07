import Link from 'next/link';
import { useRouter } from 'next/router';
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
  Checkbox,
} from './ProductList.style';

import ProductInfo from '@components/productInfo';
import Filter from '@components/filter';

const ProductList = ({ list }) => {
  const router = useRouter();

  const [products, setProducts] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  let [count, setCount] = React.useState(0);
  const [toggleFilter, setToggleFilter] = React.useState(false);
  const [toggleCompare, setToggleCompare] = React.useState(false);
  const [compareArray, setCompareArray] = React.useState([]);

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

  const handleChange = (event) => {
    let id = event.target.id;
    let checked = event.target.checked;
    if (checked === false) {
      const index = compareArray.indexOf(id);
      if (index > -1) {
        compareArray.splice(index, 1);
      }
    } else {
      if (compareArray.length < 2) {
        let newCompare = compareArray.concat(id);
        setCompareArray(newCompare);
      }
      return;
    }
  };

  React.useEffect(() => {
    if (compareArray.length === 2) {
      const href = '/compare/[id1]/[id2]';
      const as = `/compare/${compareArray[0]}/${compareArray[1]}`;

      router.push(href, as);
    }
  }, [compareArray]);

  const productRender = (products) => {
    return products.map((product) => {
      if (product.stock) {
        return (
          <ProductCard key={product.id}>
            <Link href={`/product/[id]`} as={`/product/${product.id}`}>
              <>
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
              </>
            </Link>
            <Checkbox toggleCompare={toggleCompare}>
              <input
                // disabled={compareArray.length === 2}
                onChange={(event) => handleChange(event)}
                type='checkbox'
                id={product.id}
                name={product.id}
              />
              <label htmlFor={product.id}>Compare</label>
            </Checkbox>
          </ProductCard>
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
          <OptionsItem
            onClick={() => setToggleCompare(!toggleCompare)}
            style={
              toggleCompare
                ? { textDecoration: 'underline', cursor: 'pointer' }
                : { textDecoration: 'none', cursor: 'pointer' }
            }
          >
            Compare
          </OptionsItem>
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
