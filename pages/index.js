import Head from "next/head";
import Link from "next/link";
import Header from '@components/header'

export default function Home() {

  return (
    <div>
      <Head>
        <title>REPAIREL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <h1 className="title">
          <Link href="/checkout">
            <a>Checkout</a>
          </Link>
        </h1>
        <h1 className="title">
          <Link href="/comparison">
            <a>Comparison</a>
          </Link>
        </h1>
        <h1 className="title">
          <Link href="/product">
            <a>Product</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
