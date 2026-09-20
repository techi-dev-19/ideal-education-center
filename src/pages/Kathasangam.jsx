import { IMAGES } from '../data/site';
import { KATHASANGAM } from '../data/pages';
import { usePageTitle } from '../hooks/usePageTitle';
import PageBanner from '../components/ui/PageBanner';

export default function Kathasangam() {
  usePageTitle('Kathasangam');
  return (
    <>
      <PageBanner title="Kathasangam" eyebrow="Happenings" />
      <div className="wrap pageContent">
        <p className="tagline">❞ {KATHASANGAM.tagline} ❞</p>
        {KATHASANGAM.editions.map((ed) => (
          <section key={ed.title}>
            <h2>{ed.title}</h2>
            {ed.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
        <div className="photoRow">
          {IMAGES.kathasangam.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Kathasangam 2.0 photo ${i + 1}`}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          ))}
        </div>
      </div>
    </>
  );
}
