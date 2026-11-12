import WhatsAppButton from '../components/WhatsAppButton';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-content text-center max-w-5xl mx-auto">
          <img
            src="/assets/logo-isotipo.png"
            alt="Isotipo MDB Instalaciones"
            className="logo-isotipo hero-logo block h-16 md:h-20 mx-auto mb-6"
          />
          <p className="hero-kicker mx-auto">
            Electricidad y construcción en seco en Córdoba
          </p>
          <h1 className="hero-title uppercase text-white mb-6">
            Soluciones para tu hogar,<br/>
            <span className="hero-title-accent">hechas con compromiso.</span>
          </h1>
          
          <p className="hero-description text-lg md:text-xl mb-8">
            Electricidad domiciliaria, pintura y construcción en seco en Córdoba.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <WhatsAppButton
              message="Hola, me interesa conocer más sobre sus servicios"
              size="large"
            />
            
            <a
              href="#servicios"
              className="btn-outline-light"
            >
              Ver servicios
            </a>
          </div>
          
          <div className="hero-image-container">
            <img
              src="/assets/hero.jpg"
              alt="Equipo de MDB Instalaciones trabajando en una instalación"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}