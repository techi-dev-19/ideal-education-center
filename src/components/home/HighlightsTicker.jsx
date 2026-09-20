import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HIGHLIGHTS } from '../../data/site';

export default function HighlightsTicker() {
  return (
    <div className="ticker">
      <div className="wrap tickerIn">
        <span className="tickerLabel">Recent Highlights</span>
        <div className="tickerTrack">
          {HIGHLIGHTS.map((h, i) => (
            <Fragment key={h.text}>
              {i > 0 && <span>|</span>}
              <Link to={h.to}>{h.text}</Link>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
