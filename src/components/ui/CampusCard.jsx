import { ExternalLink, Facebook, Instagram, MapPin } from 'lucide-react';
import AppLink from './AppLink';

export default function CampusCard({ campus }) {
  const { year, name, place, grades, address, map, facebook, instagram, route, external } = campus;
  const target = route ? { to: route } : { href: external };

  return (
    <article className="campus">
      <span className="year">{year}</span>
      <h3>{name}</h3>
      {place && <span className="place">{place}</span>}
      <b>{grades}</b>
      <p>
        <MapPin size={15} />
        {map ? (
          <a className="addr" href={map} target="_blank" rel="noopener noreferrer">{address}</a>
        ) : (
          address
        )}
      </p>
      <div className="campusLinks">
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label={`${name} on Facebook`}><Facebook size={16} /></a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${name} on Instagram`}><Instagram size={16} /></a>
        )}
        {(route || external) && (
          <AppLink {...target} className="visit">
            Visit {external ? <ExternalLink size={12} /> : null}
          </AppLink>
        )}
      </div>
    </article>
  );
}
