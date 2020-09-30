import Head from 'next/head';
// import Link from "next/link";
import Header from '@components/header';
import Product from '@components/productList';

import { OptionsList, OptionsItem } from '../styles/global';

export default function Home() {
  return (
    <div>
      <Head>
        <title id='title'>REPAIREL</title>
      </Head>
      <main>
        <Header />
        <section style={{ margin: '1rem' }}>
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
