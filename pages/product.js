import Link from 'next/link';
import Header from '@components/header'

const Product = () => {
  return (
    <>
      <Header/>
      <h1>Product</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};
export default Product;
