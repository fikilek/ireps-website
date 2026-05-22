import "./App.css";

const modules = [
  {
    title: "Ward-scoped infrastructure management",
    text: "Manage ERFs, premises, meters, workorders, and field activity through a clear municipal ward operating model.",
  },
  {
    title: "Mobile field operations",
    text: "Support fieldworkers with structured capture, evidence media, GPS context, offline saving, and controlled submissions.",
  },
  {
    title: "Meter lifecycle transactions",
    text: "Track inspections, readings, removals, disconnections, reconnections, commissioning, and other meter lifecycle work.",
  },
  {
    title: "Workorder Management System",
    text: "Issue, accept, reject, reassign, cancel, execute, and monitor field work through traceable operational transactions.",
  },
];

const valueCards = [
  "Improve revenue collection through authentic field data",
  "Strengthen municipal infrastructure visibility",
  "Support water, sanitation, and energy operations",
  "Create auditable records for every field transaction",
];

function App() {
  return (
    <main className="website">
      <nav className="navbar">
        <div className="brand">
          <div className="brandMark">i</div>
          <div>
            <strong>iREPS</strong>
            <span>Infrastructure Revenue & Energy Platform</span>
          </div>
        </div>

        <div className="navLinks">
          <a href="#product">Product</a>
          <a href="#operations">Operations</a>
          <a href="#water">Water & Sanitation</a>
          <a href="#demo">Request Demo</a>
        </div>
      </nav>

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
            <div className="dashboardCard">
              <p>Workorders</p>
              <strong>248</strong>
            </div>
            <div className="dashboardCard">
              <p>Meters</p>
              <strong>8,462</strong>
            </div>
            <div className="dashboardCard">
              <p>Readings</p>
              <strong>97%</strong>
            </div>
            <div className="dashboardCard">
              <p>Revenue checks</p>
              <strong>Live</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="section">
        <div className="sectionIntro">
          <p className="eyebrow">Product overview</p>
          <h2>One operational platform for municipal field intelligence.</h2>
          <p>
            iREPS connects mobile field capture, workorder control, asset
            records, meter lifecycle transactions, dashboards, and reporting.
          </p>
        </div>

        <div className="moduleGrid">
          {modules.map((module) => (
            <article className="moduleCard" key={module.title}>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="operations" className="splitSection">
        <div>
          <p className="eyebrow">Operations</p>
          <h2>From office instruction to field execution.</h2>
          <p>
            iREPS supports the full workorder path: office-issued instructions,
            assignment, field acceptance, execution, evidence capture, and
            reporting.
          </p>
        </div>

        <div className="flowCard">
          <span>Issue</span>
          <span>Accept</span>
          <span>Execute</span>
          <span>Report</span>
        </div>
      </section>

      <section id="water" className="section waterSection">
        <div className="sectionIntro">
          <p className="eyebrow">Water & sanitation model</p>
          <h2>Follow the network from source to consumer revenue.</h2>
          <p>
            iREPS can support infrastructure data collection across the water
            and sanitation value chain, from source and treatment to storage,
            distribution, consumer readings, billing, and credit control.
          </p>
        </div>

        <div className="networkFlow">
          <span>Source</span>
          <span>Treatment</span>
          <span>Storage</span>
          <span>Distribution</span>
          <span>Consumer</span>
          <span>Billing</span>
          <span>Revenue</span>
        </div>
      </section>

      <section className="section valueSection">
        <div className="sectionIntro">
          <p className="eyebrow">Municipal value</p>
          <h2>Better data. Better control. Better revenue protection.</h2>
        </div>

        <div className="valueGrid">
          {valueCards.map((item) => (
            <div className="valueCard" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="cta">
        <p className="eyebrow">Request demo</p>
        <h2>Ready to see iREPS in action?</h2>
        <p>
          We can demonstrate how iREPS supports ward-scoped operations,
          workorders, meter lifecycles, dashboards, and revenue protection.
        </p>
        <a className="primaryButton" href="mailto:fikilekentane@gmail.com">
          Contact iREPS
        </a>
      </section>

      <footer className="footer">
        <strong>iREPS</strong>
        <span>
          Public website for municipal infrastructure and revenue operations.
        </span>
      </footer>
    </main>
  );
}

export default App;
