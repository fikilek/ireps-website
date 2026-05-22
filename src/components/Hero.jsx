import { heroStats } from "../data/websiteContent";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="heroContent">
        <p className="eyebrow">
          Municipal infrastructure • Field operations • Revenue protection
        </p>

        <h1>
          The digital operating platform for municipal infrastructure,
          workorders, meters, and revenue protection.
        </h1>

        <p className="heroText">
          iREPS helps municipalities and service providers manage field work,
          meter lifecycle transactions, infrastructure records, authentic
          evidence, dashboards, and billing-readiness from a ward-scoped
          operational system.
        </p>

        <div className="heroActions">
          <a className="primaryButton" href="#demo">
            Request a Demo
          </a>

          <a className="secondaryButton" href="#product">
            Explore the Platform
          </a>
        </div>
      </div>

      <div className="heroPanel">
        <div className="panelHeader">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="dashboardCard big">
          <p>iREPS Operations View</p>
          <strong>Ward-scoped control</strong>
          <small>
            Infrastructure records, meter lifecycles, workorders, field
            evidence, dashboards, and reports.
          </small>
        </div>

        <div className="dashboardGrid">
          {heroStats.map((item) => (
            <div className="dashboardCard" key={item.label}>
              <p>{item.label}</p>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
