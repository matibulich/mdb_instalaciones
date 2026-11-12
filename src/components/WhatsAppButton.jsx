import { business } from '../data/business';
import { WhatsAppIcon } from './BrandIcons';

export default function WhatsAppButton({ 
  message = "Hola, me interesa conocer más sobre sus servicios", 
  size = "medium",
  className = "",
  ...props 
}) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${size === 'large' ? 'btn-whatsapp-large' : ''} ${className}`}
      {...props}
    >
      <WhatsAppIcon size={20} />
      <span>Consultar por WhatsApp</span>
    </a>
  );
}