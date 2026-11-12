import { MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons';
import { business } from '../data/business';

export default function Contact() {
  return (
    <section id="contacto" className="contact-section py-20 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contáctanos"
          subtitle="Contanos qué necesitás y te ayudamos a encontrar la solución perfecta para tu hogar."
          centered={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="contact-details">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Información de contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/10 p-3 rounded-lg">
                  <WhatsAppIcon size={24} className="text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">WhatsApp</h4>
                  <p className="text-text-secondary mb-2">
                    {business.whatsappDisplay}
                  </p>
                  <a
                    href={`https://wa.me/${business.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-secondary-blue font-medium"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/10 p-3 rounded-lg">
                  <InstagramIcon size={24} className="text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Instagram</h4>
                  <p className="text-text-secondary mb-2">
                    {business.instagramHandle}
                  </p>
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-secondary-blue font-medium"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/10 p-3 rounded-lg">
                  <MapPin size={24} className="text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Cobertura</h4>
                  <p className="text-text-secondary">
                    {business.coverage}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Mensaje rápido por WhatsApp
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-border-soft rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 border border-border-soft rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="electricidad">Electricidad domiciliaria</option>
                  <option value="pintura">Pintura</option>
                  <option value="construccion">Construcción en seco</option>
                  <option value="otro">Otro servicio</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-border-soft rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntanos qué necesitas..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-whatsapp"
                onClick={(e) => {
                  e.preventDefault();
                  const name = document.getElementById('name').value;
                  const service = document.getElementById('service').value;
                  const message = document.getElementById('message').value;
                  
                  const serviceLabels = {
                    electricidad: 'electricidad domiciliaria',
                    pintura: 'pintura',
                    construccion: 'construcción en seco (Durlock)',
                    otro: 'otro servicio'
                  };
                  const serviceLabel = serviceLabels[service] || 'servicio';
                  const whatsappMessage = `Hola, soy ${name} y me interesa ${serviceLabel} de MDB Instalaciones. ${message}`;
                  window.open(`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                }}
              >
                <WhatsAppIcon size={20} />
                <span>Enviar mensaje por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}