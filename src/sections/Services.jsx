import { Zap, Paintbrush, Hammer } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { services } from '../data/services';

const iconMap = {
  Zap,
  Paintbrush,
  Hammer
};

export default function Services() {
  return (
    <section id="servicios" className="service-section py-20 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nuestros Servicios"
          subtitle="Ofrecemos soluciones completas para el hogar con los más altos estándares de calidad y profesionalismo."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <ServiceCard
                key={service.id}
                icon={IconComponent}
                title={service.title}
                description={service.description}
                items={service.items}
                note={service.note}
              />
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-text-secondary text-lg mb-6">
            ¿Tenés un proyecto en mente? Contanos qué necesitás y te asesoramos.
          </p>
          <WhatsAppButton message="Hola, quiero consultar por sus servicios" />
        </div>
      </div>
    </section>
  );
}