import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS, IMAGES, SITE } from "../../data/site";
import { NAV } from "../../data/navigation";
import AppLink from "../ui/AppLink";
import Logo from "../ui/Logo";
import footer_banner from "../../../public/images/footer_banner.png";

const WHO_WE_ARE = NAV.find((n) => n.label === "About Us").children;

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="wrap">
        <div className="footerBanner">
          <img
            src={footer_banner}
            alt=""
            referrerPolicy="no-referrer"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        <div className="footergrid">
          <div>
            <Logo light />
            <p style={{ marginTop: 16 }}>
              Enlightening education, inclusive learning and character-led
              growth for every child.
            </p>
            <div className="socials">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4>Who We Are ?</h4>
            {WHO_WE_ARE.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
            <Link to="/admission">Admission</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>

          <div className="footerContact">
            <h4>Contact</h4>
            <p>
              <Phone size={15} />{" "}
              <a href={SITE.tollFreeHref} style={{ margin: 0 }}>
                {SITE.tollFree}
              </a>
            </p>
            <p>
              <Mail size={15} />{" "}
              <a href={`mailto:${SITE.email}`} style={{ margin: 0 }}>
                {SITE.email}
              </a>
            </p>
            <p>
              <MapPin size={15} /> {SITE.address}
            </p>
          </div>
        </div>

        <div className="footerLinks">
          {FOOTER_LINKS.map((l) => (
            <AppLink key={l.label} to={l.to} href={l.href}>
              {l.label}
            </AppLink>
          ))}
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
