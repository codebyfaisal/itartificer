import React from "react";
import cn from "@/shared/utils/cn";

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer group relative overflow-hidden hover:-translate-y-1 duration-400 ease-in";

  const variants = {
    primary: "bg-primary text-primary-foreground shadow hover:bg-primary/20",
    secondary:
      "bg-secondary text-secondary-foreground shadow hover:bg-secondary/20",
    outline:
      "ring-2 ring-primary/90 text-primary bg-transparent hover:bg-primary/10 hover:text-primary-foreground",
    white: "bg-white text-secondary shadow hover:bg-white/10 hover:text-white",
  };

  const spanVariants = {
    primary: "bg-secondary",
    secondary: "bg-primary",
    outline: "bg-primary",
    white: "bg-secondary",
  };

  const sizes = {
    sm: "py-3 px-5 text-xs",
    md: "py-3 px-10 text-md!",
    lg: "py-3.5 px-10",
    icon: "h-9 w-9",
  };

  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}

      {/* these are not sync with variants */}
      <div className="w-full absolute bottom-0 left-0 h-full -z-10">
        <span
          className={cn(
            "absolute bottom-0 left-0 h-full w-0 transition-all duration-400 ease-out group-hover:w-1/2",
            spanVariants[variant] || spanVariants.primary,
          )}
        ></span>

        <span
          className={cn(
            "absolute bottom-0 right-0 h-full w-0 transition-all duration-400 ease-out group-hover:w-1/2",
            spanVariants[variant] || spanVariants.primary,
          )}
        ></span>
      </div>
    </button>
  );
};

export default Button;
