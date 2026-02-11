import cn from "../utils/cn";
import randomId from "../utils/randomId";

const Textarea = ({
  label = null,
  placeholder = "",
  value = "",
  name = "",
  onChange = () => {},
  className = {
    field: "",
    input: "",
    label: "",
  },
  ...props
}) => {
  const id = randomId();
  return (
    <div className={cn("space-y-2", className.field)}>
      {label && (
        <label
          htmlFor={id}
          className={cn("text-sm font-medium", className.label)}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full px-4 py-2 ring ring-foreground/20 focus:ring-primary focus:ring-2 rounded-md",
          className.input,
        )}
        {...props}
      />
    </div>
  );
};

export default Textarea;
