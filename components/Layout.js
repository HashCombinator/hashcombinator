import Head from 'next/head';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base text-white">
      <Head>
        <title>HashCombinator - Crypto-Powered Startup Incubator</title>
        <meta name="description" content="We help AI startups enter Web3 using memecoin-powered funding." />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
