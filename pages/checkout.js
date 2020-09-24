import Link from 'next/link';

const Checkout = () => {
  return (
    <>
      <h1>Checkout</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};
export default Checkout;
