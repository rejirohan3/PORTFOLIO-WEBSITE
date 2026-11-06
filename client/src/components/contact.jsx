import { useState } from 'react';
import { API } from '../api';

export default function Contact() {
  const empty = { name: '', email: '', message: '' };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('');
  const set = k => e => setForm({ ...form, [k]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const r = await fetch(`${API}/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error();
      setStatus('Thanks, message sent!'); setForm(empty);
    } catch { setStatus('Something went wrong. Try again.'); }
  };

  return (
    <section id="contact" className="section">
      <p className="eyebrow">Get in touch</p>
      <h2>Contact</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" required value={form.name} onChange={set('name')} />
        <input type="email" placeholder="Email" required value={form.email} onChange={set('email')} />
        <textarea rows="5" placeholder="Message" required value={form.message} onChange={set('message')} />
        <button>Send</button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
}