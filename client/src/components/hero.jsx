import { site } from '../config';
export default function Hero() {
  const [a, b, c] = site.headline;
  return (
    <section id="about" className="hero">
      <p className="eyebrow">{site.eyebrow}</p>
      <h1>{a} <em>{b}</em> {c}</h1>
      <div className="intro">
        <img src={site.photo} alt={site.name} />
        <p>{site.intro}</p>
      </div>
    </section>
  );
}