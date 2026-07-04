function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div className="footerBrand">
          <a className="brand" href="#top">
            <div className="brandMark brandMarkSm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <strong>iREPS</strong>
          </a>
          <p>
            Infrastructure Revenue & Energy Platform. Ward-scoped municipal
            operations for field capture, workorders, meter lifecycles, GIS
            maps, dashboards, and revenue protection.
          </p>
        </div>

        <div className="footerLinks">
          <strong>Platform</strong>
          <a href="#product">Product Overview</a>
          <a href="#field-to-office">How It Works</a>
          <a href="#onboarding">Onboarding</a>
          <a href="#roles">User Roles</a>
          <a href="#operations">Operations</a>
        </div>

        <div className="footerLinks">
          <strong>Solutions</strong>
          <a href="#water">Water & Sanitation</a>
          <a href="#energy">Energy Meter Lifecycle</a>
          <a href="#gis">GIS & Maps</a>
          <a href="#vending">Prepaid Vending</a>
          <a href="#dashboards">Dashboards</a>
        </div>

        <div className="footerLinks">
          <strong>Company</strong>
          <a href="#demo">Request Demo</a>
          <a href="mailto:fikilekentane@gmail.com">Contact</a>
        </div>
      </div>

      <div className="footerBottom">
        <span>&copy; {new Date().getFullYear()} iREPS. All rights reserved.</span>
        <span>Built for municipal operational excellence.</span>
      </div>
    </footer>
  );
}

export default Footer;
