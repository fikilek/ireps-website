import { useEffect, useState } from "react";

const primaryLinks = [
  { label: "Product", href: "#product" },
  { label: "Data Flow", href: "#data-flow" },
  { label: "Operations", href: "#operations" },
  { label: "GIS Maps", href: "#gis" },
  { label: "Dashboards", href: "#dashboards" },
];

const platformLinks = [
  { label: "Field to Office", href: "#field-to-office" },
  { label: "Onboarding", href: "#onboarding" },
  { label: "User Roles", href: "#roles" },
  { label: "Water Model", href: "#water" },
  { label: "Energy Model", href: "#energy" },
  { label: "Vending", href: "#vending" },
  { label: "Teams", href: "#teams" },
  { label: "Geofences", href: "#geofences" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar premiumNav${scrolled ? " scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="iREPS home">
        <div className="brandMark">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="brandText">
          <strong>iREPS</strong>
          <span>Intelligent Revenue Enhancement and Protection Solution</span>
        </div>
      </a>

      <div className="navLinks premiumNavLinks">
        {primaryLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}

        <div className="navDropdown">
          <button type="button">
            Platform
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="navDropdownPanel">
            {platformLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <a className="navCta" href="#demo">
        Request Demo
      </a>
    </nav>
  );
}

export default Navbar;
