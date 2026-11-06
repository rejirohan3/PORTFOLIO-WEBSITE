import { useEffect, useState } from 'react';
import { API } from '../api';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`${API}/projects`).then(r => r.json()).then(setProjects).catch(() => {});
  }, []);

  return (
    <section id="work" className="section">
      <p className="eyebrow">Selected Work</p>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <a key={p._id} href={p.link} target="_blank" rel="noreferrer" className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <small>{p.tech?.join(' · ')}</small>
          </a>
        ))}
      </div>
    </section>
  );
}