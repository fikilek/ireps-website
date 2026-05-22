import { navLinks } from "../data/websiteContent";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brandMark">i</div>

        <div>
          <strong>iREPS</strong>
          <span>Infrastructure Revenue & Energy Platform</span>
        </div>
      </div>

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
