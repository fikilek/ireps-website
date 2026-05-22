function CallToAction() {
  return (
    <section id="demo" className="cta">
      <div className="ctaContent">
        <p className="eyebrow">Request demo</p>

        <h2>Let’s demonstrate iREPS for your municipal operations.</h2>

        <p>
          See how iREPS supports ward-scoped infrastructure visibility,
          workorder control, meter lifecycle transactions, field evidence,
          dashboards, water and energy operations, and revenue protection.
        </p>

        <div className="ctaActions">
          <a className="primaryButton" href="mailto:fikilekentane@gmail.com">
            Request a Demo
          </a>

          <a className="secondaryButton light" href="#water">
            View Operating Models
          </a>
        </div>
      </div>

      <div className="ctaPanel">
        <strong>What we can show</strong>

        <ul>
          <li>Mobile field operations</li>
          <li>Meter lifecycle workorders</li>
          <li>Water and energy operating models</li>
          <li>Dashboards, reports, and revenue protection</li>
        </ul>
      </div>
    </section>
  );
}

export default CallToAction;
