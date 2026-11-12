export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  items,
  note,
  className = "" 
}) {
  return (
    <div className={`service-card ${className}`}>
      <div className="flex items-center mb-4">
        {Icon && (
          <div className="bg-primary-blue/10 p-3 rounded-lg">
            <Icon size={24} className="text-primary-blue" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-text-primary ml-4">
          {title}
        </h3>
      </div>
      
      {description && (
        <p className="text-text-secondary">
          {description}
        </p>
      )}
      {items && (
        <ul className="list-disc space-y-2 pl-5 text-text-secondary marker:text-brand-orange">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {note && (
        <p className="mt-4 border-t border-border-soft pt-4 text-sm font-semibold text-primary-blue">
          {note}
        </p>
      )}
    </div>
  );
}