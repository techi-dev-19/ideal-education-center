import { usePageTitle } from '../hooks/usePageTitle';
import HighlightsTicker from '../components/home/HighlightsTicker';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Philosophy from '../components/home/Philosophy';
import WhatSetsUsApart from '../components/home/WhatSetsUsApart';
import Associations from '../components/home/Associations';
import CampusesSection from '../components/home/CampusesSection';
import MediaCoverage from '../components/home/MediaCoverage';
import EnrollCta from '../components/home/EnrollCta';

export default function Home() {
  usePageTitle('');
  return (
    <>
      <HighlightsTicker />
      <Hero />
      <Stats />
      <Philosophy />
      <WhatSetsUsApart />
      <Associations />
      <CampusesSection />
      <MediaCoverage />
      <EnrollCta />
    </>
  );
}
