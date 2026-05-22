import { roleFlowSteps, userRoleCards } from "../data/websiteContent";
import SectionHeader from "./SectionHeader";

function UserRolesShowcase() {
  return (
    <section id="roles" className="section userRolesShowcase">
      <SectionHeader
        eyebrow="User roles & permissions"
        title="Every iREPS user operates through a defined role."
      >
        iREPS separates platform administration, municipal management,
        supervision, and field execution through role-aware workflows. This
        helps protect operational data while giving each user the tools they
        need for their work.
      </SectionHeader>

      <div className="roleFlow">
        {roleFlowSteps.map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>

      <div className="userRoleGrid">
        {userRoleCards.map((item) => (
          <article className="userRoleCard" key={item.role}>
            <div className="roleBadge">{item.role}</div>

            <div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default UserRolesShowcase;
