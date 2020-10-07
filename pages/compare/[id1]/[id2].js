import Link from 'next/link';
import Header from '@components/header';

const Comparison = () => {
  return (
    <>
      <Header />
      <h1>Comparison</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};
export default Comparison;

{
  /* <Link
   href="/post/[postId]/[commentId]"
   as={`/post/${postId}/${commentId}`}>
      <a>link to comment</a>
</Link> */
}