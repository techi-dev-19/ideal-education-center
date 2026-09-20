import { IMAGES } from '../../data/site';
import SectionHeading from '../ui/SectionHeading';

export default function Associations() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading eyebrow="PARTNERS" title="Our Associations" />
        <div className="assoc">
          {IMAGES.associations.map((src, i) => (
            <div key={src}>
              <img
                src={src}
                alt={`Association partner ${i + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.parentElement.style.display = 'none')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
