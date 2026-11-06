import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Contact from './components/Contact';

export default function App() {
  return (<><Navbar /><Hero /><Projects /><Expertise /><Contact />
    <footer>© {new Date().getFullYear()} ROHAN REJI</footer></>);
}