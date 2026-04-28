import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';
import TransportModes from '../components/TransportModes';

export default function Landing() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <TransportModes />
      <Solution />
      <Features />
      <Benefits />
      <CTA />
    </>
  );
}
