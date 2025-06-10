import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import AdvantagesSection from '../components/AdvantagesSection';
import ProcessSection from '../components/ProcessSection';
import LaunchShowcase from '../components/LaunchShowcase';
import TeamSection from '../components/TeamSection';
import CardSection from '../components/CardSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProblemSection />
      <AdvantagesSection />
      <ProcessSection />
      <LaunchShowcase />
      <CardSection />
      <TeamSection />
      <Footer />
    </>
  );
} 