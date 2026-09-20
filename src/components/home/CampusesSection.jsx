import { ArrowRight } from 'lucide-react';
import { CAMPUSES } from '../../data/campuses';
import SectionHeading from '../ui/SectionHeading';
import CampusCard from '../ui/CampusCard';
import AppLink from '../ui/AppLink';

export default function CampusesSection() {
  return (
    <section className="section tint" id="campuses">
      <div className="wrap">
        <SectionHeading eyebrow="OUR CAMPUSES" title="A school for every stage">
          Explore our network of learning communities across Kanpur.
        </SectionHeading>
        <div className="campusgrid">
          {CAMPUSES.map((c) => (
            <CampusCard key={c.id} campus={c} />
          ))}
        </div>
        <div className="center">
          <AppLink to="/contact-us" className="btn">
            Contact Campuses <ArrowRight size={17} />
          </AppLink>
        </div>
      </div>
    </section>
  );
}
