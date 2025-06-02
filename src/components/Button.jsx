export default function Button({ variant = 'primary', size = 'md', children, onClick, ...props }) {
    const base = "rounded font-semibold transition focus:outline-none ";
  
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };
  
    const sizes = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };
  
    return (
      <button
        className={`${base} ${variants[variant]} ${sizes[size]}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
  