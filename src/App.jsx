import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Coverage from './sections/Coverage';
import Clients from './sections/Clients';
import Contact from './sections/Contact';

export default function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-light-gray">
      <Header />
      <main>
        <Hero />
        <Services />
        <Coverage />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}