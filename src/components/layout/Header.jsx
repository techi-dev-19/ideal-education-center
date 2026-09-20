import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "../../data/navigation";
import AppLink from "../ui/AppLink";
import Logo from "../ui/Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // mobile accordion
  const { pathname } = useLocation();

  // Close the menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenIndex(null);
  }, [pathname]);

  return (
    <header className="siteHeader">
      <div className="wrap headerin">
        <Logo />

        <nav
          className={`mainNav ${mobileOpen ? "open" : ""}`}
          aria-label="Main"
        >
          <ul className="navList">
            {NAV.map((item, i) => {
              const hasChildren = Boolean(item.children?.length);
              const isOpen = openIndex === i;

              return (
                <li
                  key={item.label}
                  className={`navItem ${isOpen ? "open" : ""}`}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      className="navLink"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      {item.label} <ChevronDown size={14} />
                    </button>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `navLink ${isActive ? "active" : ""}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}

                  {hasChildren && (
                    <ul className="dropdown">
                      {item.to && (
                        <li>
                          <AppLink to={item.to}>All {item.label}</AppLink>
                        </li>
                      )}
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <AppLink to={child.to} href={child.href}>
                            {child.label}
                          </AppLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <AppLink to="/admission" className="btn small desktop">
          Enquire Now <ArrowRight size={16} />
        </AppLink>

        <button
          type="button"
          className="menuBtn"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
