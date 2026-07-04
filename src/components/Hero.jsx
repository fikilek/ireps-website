import { heroStats } from "../data/websiteContent";

function Hero() {
  return (
    <section id="top" className="hero premiumHero">
      <div className="heroBg" aria-hidden="true">
        <div className="heroGradient heroGradient1" />
        <div className="heroGradient heroGradient2" />
        <div className="heroGradient heroGradient3" />
        <div className="heroGrid" />
        <div className="heroOrbs">
          <span className="orb orb1" />
          <span className="orb orb2" />
          <span className="orb orb3" />
        </div>
      </div>

      <div className="heroShell">
        <div className="heroContent">
          <div className="heroBadge">
            <span className="badgeDot" />
            Municipal Infrastructure Platform
          </div>

          <h1>Intelligent revenue protection for municipal infrastructure.</h1>

          <p className="heroText">
            iREPS helps municipalities and service providers manage ward-scoped
            fieldwork, meter lifecycle transactions, GIS maps, dashboards,
            evidence, reporting, and billing-readiness from one modern operating
            platform.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#demo">
              Request a Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a className="secondaryButton" href="#field-to-office">
              Watch Field Flow
            </a>
          </div>

          <div className="heroProof">
            <span>Ward-scoped</span>
            <span>Offline-ready capture</span>
            <span>GIS intelligence</span>
            <span>Audit evidence</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="iREPS operations view mockup">
          <div className="heroOrbitGlow" />

          <div className="heroMockup premiumMockup">
            <div className="mockupHeader">
              <span className="mockupDot dotRed" />
              <span className="mockupDot dotYellow" />
              <span className="mockupDot dotGreen" />
              <span className="mockupTitle">iREPS Command Centre</span>
            </div>

            <div className="premiumMockupBody">
              <div className="commandTopRow">
                <div>
                  <p>Live municipal view</p>
                  <strong>Ward Operations</strong>
                </div>
                <span>ONLINE</span>
              </div>

              <div className="commandMap">
                <span className="wardShape wardShapeOne" />
                <span className="wardShape wardShapeTwo" />
                <i className="commandPin commandPinOne" />
                <i className="commandPin commandPinTwo" />
                <i className="commandPin commandPinThree" />
                <i className="commandRoute" />
              </div>

              <div className="commandMetricGrid">
                {heroStats.slice(0, 4).map((item) => (
                  <div className="commandMetric" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>

              <div className="commandTimeline">
                <div>
                  <span>01</span>
                  <p>Field capture</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Cloud sync</p>
                </div>
                <div>
                  <span>03</span>
                  <p>Office review</p>
                </div>
              </div>
            </div>
          </div>

          <div className="floatingInsight floatingInsightOne">
            <span />
            <div>
              <strong>Evidence synced</strong>
              <p>GPS, photos, and TRNs</p>
            </div>
          </div>

          <div className="floatingInsight floatingInsightTwo">
            <span />
            <div>
              <strong>Exceptions flagged</strong>
              <p>Access and meter issues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
