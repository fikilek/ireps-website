import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";
import NetworkModelSection from "../components/NetworkModelSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

import {
  modules,
  operationSteps,
  waterNetworkSteps,
  energyNetworkSteps,
  waterValueCards,
  energyValueCards,
  valueCards,
} from "../data/websiteContent";

function Home() {
  return (
    <main className="website">
      <Navbar />

      <Hero />

      <section id="product" className="section">
        <SectionHeader
          eyebrow="Product overview"
          title="One operational platform for municipal field intelligence."
        >
          iREPS connects mobile field capture, workorder control, asset records,
          meter lifecycle transactions, dashboards, and reporting.
        </SectionHeader>

        <div className="moduleGrid">
          {modules.map((module) => (
            <FeatureCard
              key={module.title}
              title={module.title}
              text={module.text}
            />
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
          {operationSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </section>

      <NetworkModelSection
        id="water"
        className="waterSection"
        eyebrow="Water & sanitation model"
        title="Follow the water network from source to consumer revenue."
        description="iREPS can support infrastructure data collection across the water and sanitation value chain, from source and treatment to storage, distribution, consumer readings, billing-readiness, revenue, and credit control."
        steps={waterNetworkSteps}
        valueCards={waterValueCards}
      />

      <NetworkModelSection
        id="energy"
        className="energySection"
        eyebrow="Energy meter lifecycle model"
        title="Connect electricity meter lifecycle work to billing, revenue, and credit control."
        description="iREPS supports electricity operations by linking service connections, meter discovery, meter installation, meter reading, decommissioning, disconnection, reconnection, billing-readiness, revenue monitoring, and credit control support."
        steps={energyNetworkSteps}
        valueCards={energyValueCards}
      />

      <section className="section valueSection">
        <SectionHeader
          eyebrow="Municipal value"
          title="Better data. Better control. Better revenue protection."
        />

        <div className="valueGrid">
          {valueCards.map((item) => (
            <div className="valueCard" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <CallToAction />

      <Footer />
    </main>
  );
}

export default Home;
