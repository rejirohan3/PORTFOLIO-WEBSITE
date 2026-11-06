import { projects } from '../config';

export default function Projects() {
  return (
    <section id="work" className="section">
      <p className="eyebrow">Selected Work</p>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <small>{p.tech.join(' · ')}</small>
          </a>
        ))}
      </div>
    </section>
  );
}