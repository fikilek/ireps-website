function FeatureCard({ title, text, icon }) {
  return (
    <article className="moduleCard">
      {icon && <div className="moduleCardIcon">{icon}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;
