import Link from 'next/link';

const About = () => {
  return (
    <>
      <h1>About</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};
export default About;
