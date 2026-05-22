import SectionHeader from "./SectionHeader";

function NetworkModelSection({
  id,
  className = "",
  eyebrow,
  title,
  description,
  steps,
  valueCards,
}) {
  return (
    <section id={id} className={`section networkModelSection ${className}`}>
      <SectionHeader eyebrow={eyebrow} title={title}>
        {description}
      </SectionHeader>

      <div className="networkFlow">
        {steps.map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>

      <div className="modelValueGrid">
        {valueCards.map((item) => (
          <div className="modelValueCard" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default NetworkModelSection;
