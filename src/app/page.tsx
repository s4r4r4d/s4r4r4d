import type { Metadata } from 'next';
import Hero from './components/Hero';
import LatestWork from './components/LatestWork';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main>
      <Hero/>
      <LatestWork/>
    </main>
  );
}
