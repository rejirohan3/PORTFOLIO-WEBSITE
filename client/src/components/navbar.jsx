import { site } from '../config';
export default function Navbar() {
  return (
    <nav>
      <strong>{site.name}</strong>
      <div className="links">
        {['about', 'work', 'expertise', 'contact'].map(l => <a key={l} href={`#${l}`}>{l}</a>)}
      </div>
      <a href={site.resume} target="_blank" rel="noreferrer">Resume</a>
    </nav>
  );
}