import { navLinks } from "../data/websiteContent";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="brand" href="#top" aria-label="iREPS home">
        <div className="brandMark">
          <span>i</span>
        </div>

        <div className="brandText">
          <strong>iREPS</strong>
          <span>Infrastructure Revenue & Energy Platform</span>
        </div>
      </a>

      <div className="navLinks">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
