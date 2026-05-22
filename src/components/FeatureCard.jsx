function FeatureCard({ title, text }) {
  return (
    <article className="moduleCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;
