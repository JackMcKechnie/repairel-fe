import Header from '@components/header';
import Head from 'next/head';

import { LinedHeading } from '../styles/global';

const FAQ = () => {
  return (
    <>
      <Head>
        <title id='title'>REPAIREL | FAQ</title>
      </Head>
      <Header />
      <section style={{ margin: '1rem' }}>
        <LinedHeading>FAQs</LinedHeading>
      </section>
    </>
  );
};
export default FAQ;
