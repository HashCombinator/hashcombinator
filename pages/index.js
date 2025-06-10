import { useRef } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import MemecoinAdvantages from '@/components/MemecoinAdvantages';
import ProcessSection from '@/components/ProcessSection';
import LaunchShowcase from '@/components/LaunchShowcase';
import ApplicationForm from '@/components/ApplicationForm';
import TeamSection from '@/components/TeamSection';

export default function Home() {
  const applyRef = useRef(null);
  return (
    <Layout>
      <Hero onApply={() => applyRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <ProblemSection />
      <MemecoinAdvantages />
      <ProcessSection />
      <LaunchShowcase />
      <div ref={applyRef}>
        <ApplicationForm />
      </div>
      <TeamSection />
    </Layout>
  );
}
