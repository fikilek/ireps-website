import { vendingFeatureCards, vendingFlowSteps, vendingMetricCards } from "../data/websiteContent";
import SectionHeader from "./SectionHeader";
import useScrollReveal from "../hooks/useScrollReveal";

function VendingShowcase() {
  const featRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="vending" className="section vendingShowcase">
      <div className="vendingContent">
        <SectionHeader
          eyebrow="Prepaid Vending Platform Linkage"
          title="Connect prepaid meters, vending activity, revenue exceptions, and field follow-up."
        >
          iREPS can support prepaid operations by linking meter records, vending
          confirmation, token activity, commissioning evidence, exception
          monitoring, and revenue protection workorders.
        </SectionHeader>

        <div className="vendingFeatureGrid reveal-stagger" ref={featRef}>
          {vendingFeatureCards.map((item) => (
            <article className="vendingFeatureCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="vendingPanel">
        <div className="vendingPanelHeader">
          <div>
            <p>Prepaid revenue view</p>
            <strong>Meter → Vend → Revenue → Action</strong>
          </div>
          <span>Integration-ready</span>
        </div>

        <div className="vendingFlow">
          {vendingFlowSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>

        <div className="vendingMetricGrid">
          {vendingMetricCards.map((item) => (
            <div className="vendingMetricCard" key={item.label}>
              <p>{item.label}</p>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VendingShowcase;
