import Link from 'next/link';
// import Head from 'next/head';
import Header from '@components/header';
import Product from '@components/product';

const ProductPage = () => {
  return (
    <>
      {/* <Head> */}
      {/* <link
          rel='stylesheet'
          href='https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css'
          id='snipcart-css'
        />
        <script
          async
          src='https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js'
          id='snipcart-script'
        ></script>
        <div
          id='snipcart'
          // src='https://cdn.snipcart.com/scripts/2.0/snipcart.js'
          data-api-key='ZDk0NTdiYzEtMWM5MC00Nzk5LTg5YjMtZGYwZGFiNWZmYzc3NjM3MzcwNzEwNTE4MTg1ODIz'
          // hidden
        ></div> */}
      {/* </Head> */}
      <Header />
      <h1>Product</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
      <Product />
    </>
  );
};
export default ProductPage;
