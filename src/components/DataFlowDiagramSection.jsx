import { dataFlowFieldActions, dataFlowOutputs } from "../data/websiteContent";
import SectionHeader from "./SectionHeader";

function DataFlowDiagramSection() {
  return (
    <section id="data-flow" className="section dataFlowSection">
      <SectionHeader
        eyebrow="iREPS Data Flow"
        title="From meter assets and field work to cloud intelligence."
      >
        iREPS connects meter infrastructure, AMI and prepaid vending platforms,
        mobile field transactions, cloud storage, GIS maps, dashboards, reports,
        workorders, and revenue protection decisions.
      </SectionHeader>

      <div className="dataFlowDiagram">
        <div className="dataFlowColumn sourceColumn">
          <div className="dataFlowNode meterNode">
            <span className="meterIcon"></span>
            <strong>Electricity & Water Meters</strong>
            <p>
              Conventional, prepaid, field, connected, disconnected, and removed assets.
            </p>
          </div>

          <div className="dataFlowNode platformNode">
            <span className="cloudMiniIcon"></span>
            <strong>AMI / Vending Platforms</strong>
            <p>
              External readings, token activity, vending confirmation, and exceptions.
            </p>
          </div>
        </div>

        <div className="dataFlowArrows leftArrows">
          <span></span>
          <span></span>
        </div>

        <div className="dataFlowColumn actionColumn">
          <div className="dataFlowActionHeader">
            <strong>Field Transactions</strong>
            <p>Captured through iREPS Mobile and controlled workflows</p>
          </div>

          <div className="dataFlowActionList">
            {dataFlowFieldActions.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="dataFlowArrows centerArrows">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="dataFlowServer">
          <div className="serverTower">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <strong>iREPS Cloud Server</strong>
          <p>
            Stores field evidence, meter records, workorders, GIS context,
            lifecycle TRNs, readings, and reporting datasets.
          </p>
        </div>

        <div className="dataFlowArrows rightArrows">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="dataFlowColumn outputColumn">
          <div className="dataFlowMapPreview">
            <div className="miniMapShape"></div>
            <span className="miniMapDot one"></span>
            <span className="miniMapDot two"></span>
            <span className="miniMapDot three"></span>
          </div>

          <div className="dataFlowOutputGrid">
            {dataFlowOutputs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataFlowDiagramSection;
