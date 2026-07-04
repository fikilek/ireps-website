import { teamCards, teamFeatureCards, teamFlowSteps } from "../data/websiteContent";
import SectionHeader from "./SectionHeader";
import useScrollReveal from "../hooks/useScrollReveal";

function TeamsShowcase() {
  const featRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="teams" className="section teamsShowcase">
      <div className="teamsHeader">
        <SectionHeader
          eyebrow="Teams & Field Capacity"
          title="Organize people, workorders, and field execution into clear operational teams."
        >
          iREPS supports the operational reality that field work is not only
          about assets and maps. It is also about people, teams, supervisors,
          assignments, field execution, and accountable reporting.
        </SectionHeader>
      </div>

      <div className="teamsLayout">
        <div className="teamFeatureGrid reveal-stagger" ref={featRef}>
          {teamFeatureCards.map((item) => (
            <article className="teamFeatureCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="teamPanel">
          <div className="teamPanelHeader">
            <div>
              <p>Operational team view</p>
              <strong>Assign. Execute. Monitor.</strong>
            </div>
            <span>Team control</span>
          </div>

          <div className="teamFlow">
            {teamFlowSteps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>

          <div className="teamCardStack">
            {teamCards.map((team) => (
              <div className="teamMiniCard" key={team.name}>
                <div>
                  <strong>{team.name}</strong>
                  <span>{team.focus}</span>
                </div>
                <p>{team.members}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamsShowcase;
