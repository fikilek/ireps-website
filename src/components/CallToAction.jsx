import useScrollReveal from "../hooks/useScrollReveal";

function CallToAction() {
  const ref = useScrollReveal();

  return (
    <section id="demo" className="cta">
      <div className="ctaBg">
        <div className="ctaGradient ctaGrad1" />
        <div className="ctaGradient ctaGrad2" />
      </div>

      <div className="ctaContent reveal" ref={ref}>
        <p className="eyebrow">Request a Demo</p>

        <h2>
          Ready to see iREPS in action for your{" "}
          <span className="gradientText">municipal operations</span>?
        </h2>

        <p>
          Let us demonstrate how iREPS supports ward-scoped infrastructure
          visibility, workorder control, meter lifecycle transactions, field
          evidence, dashboards, and revenue protection.
        </p>

        <div className="ctaActions">
          <a className="primaryButton" href="mailto:fikilekentane@gmail.com">
            Request a Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="secondaryButton light" href="#product">
            Explore Platform
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
