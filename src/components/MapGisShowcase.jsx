import { gisFeatureCards, gisLayerItems } from "../data/websiteContent";
import SectionHeader from "./SectionHeader";

function MapGisShowcase() {
  return (
    <section id="gis" className="section gisShowcase">
      <div className="gisContent">
        <SectionHeader
          eyebrow="Map & GIS intelligence"
          title="See municipal infrastructure exactly where it operates."
        >
          iREPS brings GIS capability into daily operations by connecting
          ward-scoped maps, ERFs, premises, meters, geofences, workorders, field
          outcomes, and reporting views.
        </SectionHeader>

        <div className="gisFeatureGrid">
          {gisFeatureCards.map((item) => (
            <article className="gisFeatureCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="gisMapPanel">
        <div className="mapToolbar">
          <strong>Ward GIS View</strong>
          <span>Live spatial context</span>
        </div>

        <div className="mockMap">
          <div className="wardShape wardShapeOne"></div>
          <div className="wardShape wardShapeTwo"></div>

          <span className="mapPin meterPin pinOne">M</span>
          <span className="mapPin meterPin pinTwo">M</span>
          <span className="mapPin premisePin pinThree">P</span>
          <span className="mapPin erfPin pinFour">E</span>
          <span className="mapPin warningPin pinFive">!</span>

          <div className="geofenceShape"></div>

          <div className="mapLegend">
            <span>
              <i className="legendMeter"></i>
              Meter
            </span>
            <span>
              <i className="legendPremise"></i>
              Premise
            </span>
            <span>
              <i className="legendGeofence"></i>
              Geofence
            </span>
          </div>
        </div>

        <div className="gisLayerPanel">
          <div>
            <p>Visible layers</p>
            <strong>Map + table scope</strong>
          </div>

          <div className="layerChips">
            {gisLayerItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapGisShowcase;
