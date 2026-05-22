import { onboardingSteps, onboardingValueCards } from "../data/websiteContent";
import SectionHeader from "./SectionHeader";

function OnboardingShowcase() {
  return (
    <section id="onboarding" className="section onboardingShowcase">
      <div className="onboardingContent">
        <SectionHeader
          eyebrow="iREPS onboarding"
          title="Controlled access from sign-up to operational readiness."
        >
          iREPS onboarding helps ensure that users do not simply enter the
          system and start operating anywhere. Users are reviewed, linked to the
          correct workbase, assigned the correct role, and activated within the
          right operational scope.
        </SectionHeader>

        <div className="onboardingValueGrid">
          {onboardingValueCards.map((item) => (
            <div className="onboardingValueCard" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="onboardingPanel">
        <div className="onboardingPanelHeader">
          <div>
            <p>User readiness path</p>
            <strong>Sign up → Verify → Assign → Activate</strong>
          </div>

          <span>Controlled access</span>
        </div>

        <div className="onboardingTimeline">
          {onboardingSteps.map((step, index) => (
            <div className="onboardingStep" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OnboardingShowcase;
