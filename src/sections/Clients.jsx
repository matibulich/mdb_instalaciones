import { BadgeCheck, Handshake, House, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Clients() {
  const strengths = [
    { icon: ShieldCheck, title: 'Trabajo prolijo y seguro' },
    { icon: Handshake, title: 'Atención personalizada' },
    { icon: BadgeCheck, title: 'Materiales de calidad' },
    { icon: House, title: 'Soluciones a tu medida' }
  ];

  return (
    <section id="clientes" className="clients-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Compromiso en cada trabajo"
          subtitle="Cuidamos cada detalle para que te sientas acompañado desde el primer contacto hasta el final del trabajo."
          centered={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map(({ icon: Icon, title }) => (
            <article key={title} className="trust-card">
              <div className="trust-icon">
                <Icon size={25} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
