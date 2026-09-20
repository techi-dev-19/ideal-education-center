import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES, SITE } from "../../data/site";
import logo from "../../../public/images/logo.png";

// Shows the original logo image; falls back to a text logo if the image can't load.
export default function Logo({ light = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      to="/"
      className={`brand ${light ? "light" : ""}`}
      aria-label={SITE.name}
    >
      {failed || light ? (
        <>
          <b>{SITE.shortName}</b>
          <small>GROUP OF SCHOOLS</small>
        </>
      ) : (
        <img
          src={logo}
          alt={SITE.name}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      )}
    </Link>
  );
}
