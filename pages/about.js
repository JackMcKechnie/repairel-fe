import Header from '@components/header';
import Head from 'next/head';

import { LinedHeading } from '../styles/global';

const About = () => {
  return (
    <>
      <Head>
        <title id='title'>REPAIREL | About</title>
      </Head>
      <Header />
      <section style={{ margin: '1rem' }}>
        <LinedHeading>About us</LinedHeading>
      </section>
    </>
  );
};
export default About;
