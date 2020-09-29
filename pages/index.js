import Head from "next/head";
import Link from "next/link";
import Header from "@components/header";
import Product from "@components/product";

export default function Home() {
  return (
    <div>
      <Head>
        <title>REPAIREL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section style={{margin: "1rem"}}>
          <h1 className="title">
            <Link href="/comparison">
              <a>Comparison</a>
            </Link>
          </h1>
          <Product />
        </section>
      </main>
    </div>
  );
}
