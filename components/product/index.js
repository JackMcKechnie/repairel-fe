// import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  ProductsWrapper,
  ProductCard,
  ProductImage,
  ProductInfoWrapper,
} from "./Product.style";

import ProductInfo from "@components/productInfo";

const Product = () => {
  const [products, setProducts] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [count, setCount] = React.useState(0);

  const fetchData = () => {
    const start = products.length < count ? true : false;
    if (start) {
      fetch(
        `http://35.178.141.40:1337/products?_start=${products.length}&_limit=50`
      )
        .then((response) => response.json())
        .then((data) => setProducts(products.concat(data)));
    } else {
      setHasMore(false);
    }
  };

  React.useEffect(() => {
    if (count !== 0) {
      fetchData();
    }
  }, [count]);

  React.useEffect(() => {
    fetch(`http://35.178.141.40:1337/products/count`)
      .then((response) => response.json())
      .then((data) => setCount(data));
  }, []);

  const productRender = (products) => {
    return products.map((product) => {
      return (
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
      );
    });
  };

  return (
    products.length !== 0 && (
      <ProductsWrapper>
        <InfiniteScroll
          dataLength={products.length}
          next={() => fetchData()}
          style={{
            width: "calc(100vw - 2rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 0.5fr))",
            gridGap: "1rem",
          }}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {productRender(products)}
        </InfiniteScroll>
      </ProductsWrapper>
    )
  );
};

export default Product;
