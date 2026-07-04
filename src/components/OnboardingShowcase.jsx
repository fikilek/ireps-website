import { onboardingSteps, onboardingValueCards } from "../data/websiteContent";
import SectionHeader from "./SectionHeader";
import useScrollReveal from "../hooks/useScrollReveal";

function OnboardingShowcase() {
  const valueRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="onboarding" className="section onboardingShowcase">
      <div className="onboardingContent">
        <SectionHeader
          eyebrow="iREPS Onboarding"
          title="Controlled access from sign-up to operational readiness."
        >
          iREPS onboarding helps ensure that users do not simply enter the
          system and start operating anywhere. Users are reviewed, linked to the
          correct workbase, assigned the correct role, and activated within the
          right operational scope.
        </SectionHeader>

        <div className="onboardingValueGrid reveal-stagger" ref={valueRef}>
          {onboardingValueCards.map((item) => (
            <div className="onboardingValueCard" key={item}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
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
