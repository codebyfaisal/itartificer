import cn from "../utils/cn";
import randomId from "../utils/randomId";

const Input = ({
  label = null,
  type = "text",
  placeholder = "",
  value = "",
  name = "",
  onChange = () => {},
  className = {
    field: "",
    input: "",
    label: "",
  },
  error = null,
  ...props
}) => {
  const id = randomId();
  return (
    <div
      className={cn(
        "relative flex flex-col items-start justify-center gap-2",
        className.field,
      )}
    >
      {label && (
        <label
          htmlFor={id}
          className={cn("text-sm font-medium", className.label)}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={cn(
          "w-full px-4 py-2.5 ring ring-inset ring-foreground/10 focus:ring-primary focus:ring-2 rounded-md transition-all duration-300",
          className.input,
        )}
        {...props}
      />
      <p className="text-danger/80 text-xs! absolute bottom-0 left-0 translate-y-1/2 translate-x-4 animate-in fade-in slide-in-from-top-2">
        {error && error}
      </p>
    </div>
  );
};

export default Input;
