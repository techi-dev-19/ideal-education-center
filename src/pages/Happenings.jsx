import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HAPPENINGS } from '../data/pages';
import { usePageTitle } from '../hooks/usePageTitle';
import PageBanner from '../components/ui/PageBanner';

export default function Happenings() {
  usePageTitle('Happenings');
  return (
    <>
      <PageBanner title="Happenings" eyebrow="Activities & Events" />
      <div className="wrap pageContent">
        <div className="hapGrid">
          {HAPPENINGS.map((h) => (
            <Link key={h.to} to={h.to} className="hapCard">
              <h3>{h.title}</h3>
              {h.blurb && <p>{h.blurb}</p>}
              <span className="more">Read more <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
