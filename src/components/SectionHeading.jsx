export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = false
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="section-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 mx-auto text-text-secondary text-lg max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}