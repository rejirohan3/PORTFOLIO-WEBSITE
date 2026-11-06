const skills = {
  Frontend: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind'],
  Backend: ['Node.js', 'Express', 'REST APIs', 'JWT Auth'],
  Database: ['MongoDB', 'Mongoose'],
  Tools: ['Git/GitHub', 'Vercel', 'Render', 'Postman'],
};

export default function Expertise() {
  return (
    <section id="expertise" className="section">
      <p className="eyebrow">Skills</p>
      <h2>Expertise</h2>
      <div className="grid">
        {Object.entries(skills).map(([k, v]) => (
          <div key={k} className="card"><h3>{k}</h3><p>{v.join(' · ')}</p></div>
        ))}
      </div>
    </section>
  );
}