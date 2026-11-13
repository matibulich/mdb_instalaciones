import { useEffect, useState } from 'react';
import { business } from '../data/business';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-section py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/assets/logo-isotipo.png"
                alt="Isotipo MDB Instalaciones"
                className="logo-isotipo h-11 mr-3"
              />
              <span className="text-xl font-bold text-white">
                MDB Instalaciones
              </span>
            </div>
            <p className="text-white/80 text-sm">
              Electricidad domiciliaria, pintura y construcción en seco en Córdoba Capital.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Electricidad domiciliaria</li>
              <li>Pintura</li>
              <li>Construcción en seco (Durlock)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <WhatsAppIcon size={16} />
                <a
                  href={`https://wa.me/${business.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {business.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon size={16} />
                <a
                  href="https://www.instagram.com/mdb_instalaciones/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  @mdb_instalaciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/80">
              © {currentYear} MDB Instalaciones. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#home" className="text-sm text-white/80 hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-sm text-white/80 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#cobertura" className="text-sm text-white/80 hover:text-white transition-colors">
                Cobertura
              </a>
              <a href="#clientes" className="text-sm text-white/80 hover:text-white transition-colors">
                Clientes
              </a>
              <a href="#contacto" className="text-sm text-white/80 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
