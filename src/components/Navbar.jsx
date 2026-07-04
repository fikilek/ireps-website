import { useState, useEffect } from "react";
import { navLinks } from "../data/websiteContent";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
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
          <span>Infrastructure & Revenue Platform</span>
        </div>
      </a>

      <div className="navLinks">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <a className="navCta" href="#demo">
        Request Demo
      </a>
    </nav>
  );
}

export default Navbar;
