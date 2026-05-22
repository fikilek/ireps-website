import { heroStats } from "../data/websiteContent";

function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <p className="eyebrow">
          Municipal infrastructure • Field operations • Revenue protection
        </p>

        <h1>
          Manage infrastructure, workorders, meter lifecycles, and revenue
          protection from one ward-scoped platform.
        </h1>

        <p className="heroText">
          iREPS helps municipalities and service providers collect authentic
          field data, manage operational work, monitor infrastructure assets,
          and produce reliable reports for better decision-making.
        </p>

        <div className="heroActions">
          <a className="primaryButton" href="#demo">
            Request a Demo
          </a>

          <a className="secondaryButton" href="#product">
            Explore iREPS
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
          <p>Ward Operations</p>
          <strong>13 active wards</strong>
          <small>Infrastructure, meters, workorders, and reports</small>
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
