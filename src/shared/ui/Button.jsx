import "./Button.css";
import cn from "@/shared/utils/cn";

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  type = "button",
  className = "",
  variant = "primary"
}) => {
  return (
    <button
      className={cn("button-86", variant, className)}
      role="button"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
