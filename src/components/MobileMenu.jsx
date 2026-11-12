import { business } from '../data/business';
import { WhatsAppIcon } from './BrandIcons';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-border-soft">
      <nav className="px-4 py-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#home"
              className="block px-3 py-2 text-text-secondary hover:text-primary-blue hover:bg-light-gray rounded-md transition-colors duration-200"
              onClick={onClose}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="block px-3 py-2 text-text-secondary hover:text-primary-blue hover:bg-light-gray rounded-md transition-colors duration-200"
              onClick={onClose}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#cobertura"
              className="block px-3 py-2 text-text-secondary hover:text-primary-blue hover:bg-light-gray rounded-md transition-colors duration-200"
              onClick={onClose}
            >
              Cobertura
            </a>
          </li>
          <li>
            <a
              href="#clientes"
              className="block px-3 py-2 text-text-secondary hover:text-primary-blue hover:bg-light-gray rounded-md transition-colors"
              onClick={onClose}
            >
              Clientes
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="block px-3 py-2 text-text-secondary hover:text-primary-blue hover:bg-light-gray rounded-md transition-colors duration-200"
              onClick={onClose}
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${business.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center mt-2"
              onClick={onClose}
            >
              <WhatsAppIcon size={19} />
              Pedir presupuesto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}