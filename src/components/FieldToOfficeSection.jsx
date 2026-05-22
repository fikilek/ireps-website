import { fieldToOfficeCards, fieldToOfficeSteps } from "../data/websiteContent";
import SectionHeader from "./SectionHeader";

const hasExplainerVideo = true;

function FieldToOfficeSection() {
  return (
    <section id="field-to-office" className="section fieldToOfficeSection">
      <div className="fieldToOfficeContent">
        <SectionHeader
          eyebrow="How iREPS works"
          title="From field capture to office intelligence."
        >
          iREPS connects fieldworkers, mobile forms, cloud data, and manager
          dashboards into one operational flow for infrastructure, workorders,
          meter lifecycles, and revenue protection.
        </SectionHeader>

        <div className="fieldToOfficeCards">
          {fieldToOfficeCards.map((item) => (
            <article className="fieldToOfficeCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="fieldStepList">
          {fieldToOfficeSteps.map((step, index) => (
            <div className="fieldStep" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fieldVideoPanel">
        <div className="videoFrameHeader">
          <div>
            <strong>Field to Office Flow</strong>
            <span>iREPS Mobile → Cloud → iREPS Web</span>
          </div>

          <p>Explainer</p>
        </div>

        {hasExplainerVideo ? (
          <video
            className="fieldVideo"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster="/images/ireps-field-to-office-poster.png"
          >
            <source src="/videos/ireps-field-to-office.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="fieldStoryboard">
            <div className="storyScene fieldScene">
              <div className="cartoonPerson fieldWorker">
                <span className="personHead"></span>
                <span className="personBody"></span>
                <span className="personPhone"></span>
              </div>

              <div className="meterKiosk">
                <span></span>
                <strong>METER</strong>
              </div>

              <p>FWR captures data at meter kiosk</p>
            </div>

            <div className="syncBeam">
              <span></span>
              <strong>Cloud Sync</strong>
            </div>

            <div className="storyScene officeScene">
              <div className="cartoonPerson managerPerson">
                <span className="personHead"></span>
                <span className="personBody"></span>
              </div>

              <div className="laptopMock">
                <div className="laptopScreen">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <p>MNG reviews dashboards and reports</p>
            </div>
          </div>
        )}

        <div className="videoCaption">
          <strong>One operational chain</strong>
          <span>
            Field evidence, meter data, workorders, GIS context, dashboards, and
            reports.
          </span>
        </div>
      </div>
    </section>
  );
}

export default FieldToOfficeSection;
