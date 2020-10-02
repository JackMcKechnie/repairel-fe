import Head from 'next/head';
// import Link from "next/link";
import PropTypes from 'prop-types';
import Header from '@components/header';
import ProductList from '@components/productList';

import { OptionsList, OptionsItem } from '../styles/global';

export default function Home({ list }) {
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
          <ProductList list={list} />
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://35.178.141.40:1337/products`);
  const json = await res.json();
  return { props: { list: json } };
}

Home.propTypes = {
  list: PropTypes.array,
};
