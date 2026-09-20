import {
  Mail,
  Phone,
  Youtube,
  Facebook,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import { SITE } from "../../data/site";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topinner">
        <div className="topLeft">
          <a href={"tel:7843935876"}>
            <Phone size={14} /> Toll free no – 7843935876
          </a>
          <a href={`mailto:idealeducationcentre2@gmail.com`}>
            <Mail size={14} /> idealeducationcentre2@gmail.com
          </a>
        </div>
        <div className="topRight">
          <a
            href={"https://www.facebook.com/idealeducationcentrekanpur/"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon size={16} />
          </a>

          <a
            href={
              "https://www.instagram.com/idealeducationcentre?fbclid=IwY2xjawUc8pBwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMWR4ZkFLdTBUeEFwZEdTZm5zcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe_bwRFS579JpDNmopp6YpE4phwAs-FX6B-ml3aeyiZg9JAkAPHIMwNWlBZfw_aem_G_dLo8ZaCH7-BcJU5I4hWQ"
            }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
