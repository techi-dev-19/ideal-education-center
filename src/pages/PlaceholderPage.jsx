import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { CAMPUSES } from '../data/campuses';
import { SITE } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import PageBanner from '../components/ui/PageBanner';
import AppLink from '../components/ui/AppLink';

// Generic page for routes whose full content hasn't been copied yet.
// If the page belongs to a campus, real contact details from data/campuses.js are shown.
export default function PlaceholderPage({ page }) {
  usePageTitle(page.title);
  const campus = page.campusId ? CAMPUSES.find((c) => c.id === page.campusId) : null;

  return (
    <>
      <PageBanner title={page.title} eyebrow={page.eyebrow} />
      <div className="wrap pageContent">
        {campus && (
          <>
            <p className="lead">{campus.grades}</p>
            <div className="campusFacts">
              <p><MapPin size={18} /> {campus.address}</p>
              <p><Phone size={18} /> {campus.phone}</p>
              <p><Mail size={18} /> <a href={`mailto:${campus.email}`}>{campus.email}</a></p>
            </div>
          </>
        )}

        {page.body?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <div className="notice">
          <h2>Content coming soon</h2>
          <p>
            This page has been set up as a route, but its full content has not been added to this project yet.
            Edit <code>src/data/pages.js</code> (or create a dedicated page component) to fill it in.
          </p>
          <div className="actions">
            <AppLink href={`${SITE.liveUrl}${page.path}/`} className="btn dark">
              View on the original site <ExternalLink size={15} />
            </AppLink>
            <AppLink to="/" className="btn" style={{ background: 'var(--sky)' }}>
              Back to Home
            </AppLink>
          </div>
        </div>
      </div>
    </>
  );
}
