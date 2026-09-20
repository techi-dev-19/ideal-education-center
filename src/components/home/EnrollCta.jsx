import { ArrowRight, Phone } from 'lucide-react';
import { SITE } from '../../data/site';
import AppLink from '../ui/AppLink';

export default function EnrollCta() {
  return (
    <section className="cta">
      <div className="wrap">
        <span className="eyebrow">ENROLL NOW!</span>
        <h2>Every child deserves the chance to learn, grow and shine.</h2>
        <p>Connect with an admissions counselor.</p>
        <div className="actions">
          <a className="btn gold" href={SITE.tollFreeHref}>
            <Phone size={17} /> Call Now
          </a>
          <AppLink to="/admission" className="btn outline">
            Apply for Admission <ArrowRight size={17} />
          </AppLink>
        </div>
      </div>
    </section>
  );
}
