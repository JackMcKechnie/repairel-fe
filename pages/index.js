import Head from "next/head";
// import Link from "next/link";
import Header from "@components/header";
import Product from "@components/product";

import { OptionsList, OptionsItem } from "./Pages.style";

export default function Home() {
  return (
    <div>
      <Head>
        <title>REPAIREL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section style={{ margin: "1rem" }}>
          <OptionsList>
            <OptionsItem>Compare</OptionsItem>
            <OptionsItem>Filter</OptionsItem>
          </OptionsList>
          <Product />
        </section>
      </main>
    </div>
  );
}
