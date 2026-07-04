import useScrollReveal from "../hooks/useScrollReveal";

function SectionHeader({ eyebrow, title, children }) {
  const ref = useScrollReveal();

  return (
    <div className="sectionIntro reveal" ref={ref}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="sectionDesc">{children}</p>}
    </div>
  );
}

export default SectionHeader;
