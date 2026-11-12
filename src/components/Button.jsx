export default function Button({ 
  children, 
  variant = "primary", 
  size = "medium", 
  className = "", 
  ...props 
}) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 justify-center";
  
  const variants = {
    primary: "bg-brand-orange hover:bg-orange-600 text-white",
    secondary: "bg-white border border-primary-blue text-primary-blue hover:bg-light-gray",
    whatsapp: "bg-green-500 hover:bg-green-600 text-white"
  };
  
  const sizes = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-6 text-base",
    large: "py-4 px-8 text-lg"
  };

  const variantClasses = variants[variant] || variants.primary;

  const classes = `${baseClasses} ${variantClasses} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}