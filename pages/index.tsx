import Head from 'next/head';
import Hero from '@/components/Hero';
import Problem from '@/components/sections/Problem';
import MemecoinAdvantages from '@/components/sections/MemecoinAdvantages';
import Process from '@/components/sections/Process';
import LaunchShowcase from '@/components/sections/LaunchShowcase';
import Team from '@/components/sections/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>HashCombinator</title>
        <meta name="description" content="Crypto-native startup incubator" />
      </Head>
      <main>
        <Hero />
        <Problem />
        <MemecoinAdvantages />
        <Process />
        <LaunchShowcase />
        <Team />
      </main>
      <Footer />
    </>
  );
}
