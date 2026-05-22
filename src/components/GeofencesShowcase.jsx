import { geofenceFeatureCards, geofenceMetrics } from "../data/websiteContent";
import SectionHeader from "./SectionHeader";

function GeofencesShowcase() {
  return (
    <section id="geofences" className="section geofenceShowcase">
      <div className="geofenceVisual">
        <div className="geofenceMapCard">
          <div className="geofenceToolbar">
            <strong>Geofence Planning View</strong>
            <span>Custom work area</span>
          </div>

          <div className="geofenceMockMap">
            <div className="geofenceBoundary"></div>
            <div className="geofenceWardLine lineOne"></div>
            <div className="geofenceWardLine lineTwo"></div>

            <span className="geoDot dotOne"></span>
            <span className="geoDot dotTwo"></span>
            <span className="geoDot dotThree"></span>
            <span className="geoDot dotFour"></span>
            <span className="geoDot dotFive"></span>
            <span className="geoDot dotSix warning"></span>

            <div className="geofenceLabel">
              <strong>Meter Reading Campaign A</strong>
              <span>623 meters • 37 open workorders</span>
            </div>
          </div>

          <div className="geofenceMetricGrid">
            {geofenceMetrics.map((item) => (
              <div className="geofenceMetric" key={item.label}>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="geofenceContent">
        <SectionHeader
          eyebrow="Geofences & spatial campaigns"
          title="Turn maps into focused operating areas."
        >
          Geofences help municipalities and service providers group
          infrastructure geographically for targeted work, reporting, field
          campaigns, and revenue protection without changing the official ward
          structure.
        </SectionHeader>

        <div className="geofenceFeatureGrid">
          {geofenceFeatureCards.map((item) => (
            <article className="geofenceFeatureCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GeofencesShowcase;
