import cn from "@/shared/utils/cn";

const variants = {
  default: "bg-secondary/20 border border-border shadow-lg backdrop-blur-sm",
  outline:
    "bg-transparent border border-border shadow-none hover:bg-secondary/20",
  ghost: "bg-transparent border-none shadow-none hover:bg-secondary/20",
  glass: "card-glass",
  interactive:
    "bg-secondary/20 border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer backdrop-blur-sm",
};

const Card = ({ children, className = "", variant = "default", ...props }) => {
  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden transition-all duration-300 p-8",
        variants[variant] || variants.default,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
