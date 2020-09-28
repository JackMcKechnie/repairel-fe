import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>REPAIREL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>REPAIREL</h1>
        <h1>
          <Link href='/'>
            <a>Shop</a>
          </Link>
        </h1>
        <h1 className='title'>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </h1>
        <h1 className='title'>
          <Link href='/faq'>
            <a>FAQs</a>
          </Link>
        </h1>
        <h1 className='title'>
          <Link href='/checkout'>
            <a>Checkout</a>
          </Link>
        </h1>
        <h1 className='title'>
          <Link href='/comparison'>
            <a>Comparison</a>
          </Link>
        </h1>
        <h1 className='title'>
          <Link href='/product'>
            <a>Product</a>
          </Link>
        </h1>
      </main>

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}
