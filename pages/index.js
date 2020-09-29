import Head from "next/head";
import Link from "next/link";
import Navbar from "@components/navbar";
import Menu from "@components/menu";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Head>
        <title>REPAIREL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <Menu open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen} />
        </header>
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
