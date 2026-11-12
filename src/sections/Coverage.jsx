import { MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Coverage() {
  return (
    <section id="cobertura" className="coverage-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Zona de Cobertura"
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="coverage-card bg-white p-8 md:p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="coverage-icon p-4">
                <MapPin size={32} className="text-primary-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  Córdoba Capital y alrededores
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Trabajamos en Córdoba Capital y todas las localidades aledañas,
                  ofreciendo servicios de calidad en cada zona de la región.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <p className="text-text-secondary mb-4">
                ¿No estás seguro si trabajamos en tu zona? ¡Contáctanos!
              </p>
              <WhatsAppButton
                message="Hola, me interesa saber si trabajan en mi zona (Córdoba Capital/Alrededores)"
                size="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}