export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyle =
    "px-6 py-2.5 font-medium transition-all duration-300 ease-in-out";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    outline:
      "border border-zinc-700 text-zinc-300 hover:border-blue-500 hover:text-blue-500",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
