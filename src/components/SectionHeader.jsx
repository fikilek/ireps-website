function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="sectionIntro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export default SectionHeader;
