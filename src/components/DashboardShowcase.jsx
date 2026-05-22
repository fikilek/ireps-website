import {
  dashboardBarData,
  dashboardMetricCards,
  dashboardTableRows,
} from "../data/websiteContent";

function DashboardShowcase() {
  return (
    <section id="dashboards" className="section dashboardShowcase">
      <div className="sectionIntro dashboardIntro">
        <p className="eyebrow">Dashboards & reporting</p>

        <h2>Turn field activity into clear operational intelligence.</h2>

        <p>
          iREPS dashboards help managers see workorder progress, meter reading
          performance, revenue exceptions, field outcomes, and ward-level
          activity through simple charts, tables, and reporting views.
        </p>
      </div>

      <div className="dashboardShowcaseGrid">
        <div className="dashboardMetrics">
          {dashboardMetricCards.map((item) => (
            <div className="dashboardMetricCard" key={item.label}>
              <p>{item.label}</p>
              <strong>{item.value}</strong>
              <span>{item.note}</span>
            </div>
          ))}
        </div>

        <div className="chartCard barChartCard">
          <div className="chartHeader">
            <div>
              <p className="chartLabel">Workorder completion</p>
              <strong>Weekly field progress</strong>
            </div>

            <span>Live view</span>
          </div>

          <div className="barChart">
            {dashboardBarData.map((item) => (
              <div className="barItem" key={item.label}>
                <div className="barTrack">
                  <div
                    className="barFill"
                    style={{ height: `${item.value}%` }}
                  ></div>
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chartCard pieChartCard">
          <div className="chartHeader">
            <div>
              <p className="chartLabel">Outcome split</p>
              <strong>Field execution results</strong>
            </div>
          </div>

          <div className="pieWrap">
            <div className="pieChart"></div>

            <div className="pieLegend">
              <span>
                <i className="legendSuccess"></i>
                Success
              </span>
              <span>
                <i className="legendWarning"></i>
                No Access
              </span>
              <span>
                <i className="legendInfo"></i>
                No Reading
              </span>
            </div>
          </div>
        </div>

        <div className="chartCard dashboardTableCard">
          <div className="chartHeader">
            <div>
              <p className="chartLabel">Ward summary</p>
              <strong>Manager reporting table</strong>
            </div>
          </div>

          <div className="reportTableWrap">
            <table className="reportTable">
              <thead>
                <tr>
                  <th>Ward</th>
                  <th>Workorders</th>
                  <th>Readings</th>
                  <th>Exceptions</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {dashboardTableRows.map((row) => (
                  <tr key={row.ward}>
                    <td>{row.ward}</td>
                    <td>{row.workorders}</td>
                    <td>{row.readings}</td>
                    <td>{row.exceptions}</td>
                    <td>
                      <span className="statusPill">{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardShowcase;
