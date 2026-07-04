import SectionHeader from "./SectionHeader";
import useScrollReveal from "../hooks/useScrollReveal";

function NetworkModelSection({
  id,
  className = "",
  eyebrow,
  title,
  description,
  steps,
  valueCards,
}) {
  const flowRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section id={id} className={`section networkModelSection ${className}`}>
      <SectionHeader eyebrow={eyebrow} title={title}>
        {description}
      </SectionHeader>

      <div className="networkFlow reveal" ref={flowRef}>
        {steps.map((step, i) => (
          <span key={step}>
            <em>{String(i + 1).padStart(2, "0")}</em>
            {step}
          </span>
        ))}
      </div>

      <div className="modelValueGrid reveal-stagger" ref={gridRef}>
        {valueCards.map((item) => (
          <div className="modelValueCard" key={item}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default NetworkModelSection;
