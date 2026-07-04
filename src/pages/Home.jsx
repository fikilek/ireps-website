import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";
import NetworkModelSection from "../components/NetworkModelSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import DashboardShowcase from "../components/DashboardShowcase";
import MapGisShowcase from "../components/MapGisShowcase";
import TeamsShowcase from "../components/TeamsShowcase";
import GeofencesShowcase from "../components/GeofencesShowcase";
import VendingShowcase from "../components/VendingShowcase";
import FieldToOfficeSection from "../components/FieldToOfficeSection";
import OnboardingShowcase from "../components/OnboardingShowcase";
import UserRolesShowcase from "../components/UserRolesShowcase";
import DataFlowDiagramSection from "../components/DataFlowDiagramSection";
import useScrollReveal from "../hooks/useScrollReveal";

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
  const moduleRef = useScrollReveal({ threshold: 0.05 });
  const valueRef = useScrollReveal({ threshold: 0.05 });

  return (
    <main className="website">
      <Navbar />
      <Hero />

      {/* ── How It Works ── */}
      <FieldToOfficeSection />

      {/* ── Onboarding ── */}
      <OnboardingShowcase />

      {/* ── User Roles ── */}
      <UserRolesShowcase />

      {/* ── Data Flow ── */}
      <DataFlowDiagramSection />

      {/* ── Product Modules ── */}
      <section id="product" className="section">
        <SectionHeader
          eyebrow="Product Overview"
          title="One operational platform for municipal field intelligence."
        >
          iREPS connects mobile field capture, workorder control, asset records,
          meter lifecycle transactions, dashboards, and reporting into a single
          ward-scoped system.
        </SectionHeader>

        <div className="moduleGrid reveal-stagger" ref={moduleRef}>
          {modules.map((module, i) => (
            <FeatureCard
              key={module.title}
              title={module.title}
              text={module.text}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />}
                  {i === 1 && <><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M23 6l-11.3 8.3L7 11" /></>}
                  {i === 2 && <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>}
                  {i === 3 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></>}
                </svg>
              }
            />
          ))}
        </div>
      </section>

      {/* ── Operations Flow ── */}
      <section id="operations" className="section operationFlow">
        <SectionHeader
          eyebrow="Operations"
          title="From office instruction to field execution."
        >
          iREPS supports the full workorder path: office-issued instructions,
          assignment, field acceptance, execution, evidence capture, and
          reporting — all within one controlled workflow.
        </SectionHeader>

        <div className="flowCard reveal">
          {operationSteps.map((step, i) => (
            <span key={step}>
              <em>{String(i + 1).padStart(2, "0")}</em>
              {step}
            </span>
          ))}
        </div>
      </section>

      {/* ── Water Model ── */}
      <NetworkModelSection
        id="water"
        className="waterSection"
        eyebrow="Water & Sanitation Model"
        title="Follow the water network from source to consumer revenue."
        description="iREPS supports infrastructure data collection across the water and sanitation value chain, from source and treatment to storage, distribution, consumer readings, billing-readiness, revenue, and credit control."
        steps={waterNetworkSteps}
        valueCards={waterValueCards}
      />

      {/* ── Energy Model ── */}
      <NetworkModelSection
        id="energy"
        className="energySection"
        eyebrow="Energy Meter Lifecycle Model"
        title="Connect electricity meter lifecycle work to billing, revenue, and credit control."
        description="iREPS supports electricity operations by linking service connections, meter discovery, meter installation, meter reading, decommissioning, disconnection, reconnection, billing-readiness, revenue monitoring, and credit control."
        steps={energyNetworkSteps}
        valueCards={energyValueCards}
      />

      {/* ── GIS Maps ── */}
      <MapGisShowcase />

      {/* ── Teams ── */}
      <TeamsShowcase />

      {/* ── Geofences ── */}
      <GeofencesShowcase />

      {/* ── Vending ── */}
      <VendingShowcase />

      {/* ── Dashboards ── */}
      <DashboardShowcase />

      {/* ── Municipal Value ── */}
      <section className="section valueSection">
        <SectionHeader
          eyebrow="Municipal Value"
          title="Better data. Better control. Better revenue protection."
        />

        <div className="valueGrid reveal-stagger" ref={valueRef}>
          {valueCards.map((item) => (
            <div className="valueCard" key={item}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
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
