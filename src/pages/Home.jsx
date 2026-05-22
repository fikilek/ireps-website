import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";
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

      <section id="water" className="section waterSection">
        <SectionHeader
          eyebrow="Water & sanitation model"
          title="Follow the water network from source to consumer revenue."
        >
          iREPS can support infrastructure data collection across the water and
          sanitation value chain, from source and treatment to storage,
          distribution, consumer readings, billing-readiness, revenue, and
          credit control.
        </SectionHeader>

        <div className="networkFlow">
          {waterNetworkSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>

        <div className="modelValueGrid">
          {waterValueCards.map((item) => (
            <div className="modelValueCard" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="energy" className="section energySection">
        <SectionHeader
          eyebrow="Energy revenue model"
          title="Connect electricity infrastructure to meter readings, billing, and revenue protection."
        >
          iREPS supports electricity field operations by linking infrastructure
          visibility, meter lifecycle transactions, conventional meter readings,
          workorders, billing-readiness, revenue monitoring, and credit control
          support.
        </SectionHeader>

        <div className="networkFlow energyFlow">
          {energyNetworkSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>

        <div className="modelValueGrid">
          {energyValueCards.map((item) => (
            <div className="modelValueCard" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

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
