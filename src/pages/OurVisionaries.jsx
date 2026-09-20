import { VISIONARIES } from '../data/visionaries';
import { usePageTitle } from '../hooks/usePageTitle';
import PageBanner from '../components/ui/PageBanner';

export default function OurVisionaries() {
  usePageTitle('Our Visionaries');
  return (
    <>
      <PageBanner title="Our Visionaries" eyebrow="About Us" />
      <div className="wrap pageContent">
        <div className="visGrid">
          {VISIONARIES.map((v) => (
            <article className="visCard" key={v.name}>
              <img
                src={v.image}
                alt={v.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
              />
              <div className="visBody">
                <h3>{v.name}</h3>
                <span className="visYears">{v.years}</span>
                <p>{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
