import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
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
  StyledInput,
  StyledLabel,
} from "./ProductList.style";

import ProductInfo from "@components/productInfo";
import Filter from "@components/filter";
import CompareInstructions from "@components/compareInstructions"

const ProductList = ({ list }) => {
  const router = useRouter();

  const [products, setProducts] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  let [count, setCount] = React.useState(0);
  const [toggleFilter, setToggleFilter] = React.useState(false);
  const [toggleCompare, setToggleCompare] = React.useState(false);
  const [compareArray, setCompareArray] = React.useState([]);
  const [filteredList, setFilteredList] = React.useState([]);

  React.useEffect(() => {
    setFilteredList(list)
  }, []);

  React.useEffect(() => {
    let productArray = [];
    if (filteredList.length === 0) {
      for (var i = count; i < count + 20; i++) {
        if (i >= list.length) {
          setHasMore(false);
        } else {
          productArray.push(list[i]);
          setProducts(productArray);
        }
      }
    } else {
      // setProducts([])
      for (var j = count; j < count + 20; j++) {
        if (j >= filteredList.length) {
          setHasMore(false);
        } else {
          productArray.push(filteredList[j]);
          setProducts(productArray);
        }
      }
    }
  }, [count, filteredList]);

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
      const href = "/compare/[id1]/[id2]";
      const as = `/compare/${compareArray[0]}/${compareArray[1]}`;

      router.push(href, as);
    }
  }, [compareArray]);

  const handleFilterClick = () => {
    setToggleCompare(false);
    setToggleFilter(!toggleFilter);
  };
  const handleCompareClick = () => {
    setToggleFilter(false);
    setToggleCompare(!toggleCompare);
  };
  const productRender = (products) => {
    return products.map((product) => {
      if (product.stock) {
        return (
          <ProductCard key={product.id}>
            <Link href={`/product/[id]`} as={`/product/${product.id}`}>
              <div style={{ cursor: "pointer", width: "100%" }}>
                <ImageWrapper>
                  <ProductImage
                    loading="lazy"
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
                    size={product.Size}
                  />
                </ProductInfoWrapper>
              </div>
            </Link>
            <Checkbox toggleCompare={toggleCompare}>
              <StyledInput
                // disabled={compareArray.length === 2}
                onChange={(event) => handleChange(event)}
                type="checkbox"
                id={product.id}
                name={product.name}
              />
              <StyledLabel htmlFor={product.id}>Compare</StyledLabel>
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
            <ProductCard key={product.id} style={{ cursor: "pointer" }}>
              <ImageWrapper>
                <ProductImage
                  loading="lazy"
                  key={product.id}
                  src={product.images[0].url}
                />
                <SoldOutWrapper>
                  Sold
                  <br /> Out
                </SoldOutWrapper>
              </ImageWrapper>
              <ProductInfoWrapper>
                <ProductInfo
                  key={product.id}
                  price={product.price}
                  name={product.name}
                  rating={product.rating}
                  size={product.Size}
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
            onClick={() => handleFilterClick()}
            style={
              toggleFilter
                ? { textDecoration: "underline", cursor: "pointer" }
                : { textDecoration: "none", cursor: "pointer" }
            }
          >
            Filter
          </OptionsItem>
          <OptionsItem
            onClick={() => handleCompareClick()}
            style={
              toggleCompare
                ? { textDecoration: "underline", cursor: "pointer" }
                : { textDecoration: "none", cursor: "pointer" }
            }
          >
            Compare
          </OptionsItem>
        </OptionsList>
        {toggleFilter && (
          <Filter
            filteredList={filteredList}
            setFilteredList={setFilteredList}
            list={list}
          />
        )}
        {toggleCompare && (
          <CompareInstructions/>
        )}
        <InfiniteScrollStyled
          dataLength={products.length}
          next={() => setCount((count += 20))}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
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
