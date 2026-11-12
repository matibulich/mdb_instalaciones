import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { business } from '../data/business';
import { WhatsAppIcon } from './BrandIcons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#cobertura', label: 'Cobertura' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <header className="sticky-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2">
              
              <img
                src="/assets/logo-horizontal1.png"
                alt="Logo MDB Instalaciones"
                className="header-logo"
              />
            </a>
          </div>

          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="header-nav-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${business.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hidden md:block"
            >
              <WhatsAppIcon size={19} />
              Pedir presupuesto
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-text-primary hover:text-primary-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-blue"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-controls="header-mobile-menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div id="header-mobile-menu" className="header-mobile-menu md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-text-secondary hover:text-primary-blue hover:bg-light-gray rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center mt-2"
              >
                <WhatsAppIcon size={19} />
                Pedir presupuesto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}