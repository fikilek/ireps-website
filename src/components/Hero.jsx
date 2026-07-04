import { heroStats } from "../data/websiteContent";
import useScrollReveal from "../hooks/useScrollReveal";

function Hero() {
  const contentRef = useScrollReveal();

  return (
    <section id="top" className="hero">
      {/* Animated background elements */}
      <div className="heroBg">
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

      <div className="heroContent" ref={contentRef}>
        <div className="heroBadge reveal">
          <span className="badgeDot" />
          Municipal Infrastructure Platform
        </div>

        <h1 className="reveal">
          The digital operating system for{" "}
          <span className="gradientText">municipal infrastructure</span>
          {" "}& revenue protection.
        </h1>

        <p className="heroText reveal">
          iREPS connects fieldworkers, mobile capture, workorder control, meter
          lifecycle transactions, GIS maps, dashboards, and revenue protection
          into one ward-scoped operating platform.
        </p>

        <div className="heroActions reveal">
          <a className="primaryButton" href="#demo">
            Request a Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="secondaryButton" href="#product">
            Explore Platform
          </a>
        </div>

        {/* Stats row */}
        <div className="heroStats reveal">
          <div className="heroStatItem">
            <span className="heroStatValue">5,394+</span>
            <span className="heroStatLabel">ERFs Managed</span>
          </div>
          <div className="heroStatDivider" />
          <div className="heroStatItem">
            <span className="heroStatValue">8,462+</span>
            <span className="heroStatLabel">Meters Tracked</span>
          </div>
          <div className="heroStatDivider" />
          <div className="heroStatItem">
            <span className="heroStatValue">97%</span>
            <span className="heroStatLabel">Reading Rate</span>
          </div>
          <div className="heroStatDivider" />
          <div className="heroStatItem">
            <span className="heroStatValue">Live</span>
            <span className="heroStatLabel">Revenue Checks</span>
          </div>
        </div>
      </div>

      {/* Floating dashboard mockup */}
      <div className="heroVisual reveal">
        <div className="heroMockup">
          <div className="mockupHeader">
            <span className="mockupDot dotRed" />
            <span className="mockupDot dotYellow" />
            <span className="mockupDot dotGreen" />
            <span className="mockupTitle">iREPS Operations View</span>
          </div>

          <div className="mockupBody">
            <div className="mockupCard mockupMain">
              <div className="mockupCardLabel">Ward-scoped Control</div>
              <div className="mockupBar">
                <div className="mockupBarFill" style={{ width: "78%" }} />
              </div>
              <div className="mockupBar">
                <div className="mockupBarFill" style={{ width: "62%" }} />
              </div>
              <div className="mockupBar">
                <div className="mockupBarFill" style={{ width: "91%" }} />
              </div>
            </div>

            <div className="mockupGrid">
              {heroStats.slice(0, 4).map((item) => (
                <div className="mockupMiniCard" key={item.label}>
                  <span className="mockupMiniLabel">{item.label}</span>
                  <span className="mockupMiniValue">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mockupMap">
              <div className="mockupMapPin pin1" />
              <div className="mockupMapPin pin2" />
              <div className="mockupMapPin pin3" />
              <div className="mockupMapPin pin4" />
              <div className="mockupMapLine" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
