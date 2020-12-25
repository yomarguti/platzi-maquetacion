import Head from 'next/head';
import Main from '@components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mi Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
