import randomId from "../utils/randomId";
import cn from "../utils/cn";

const Select = ({
  label = null,
  placeholder = "",
  name = "",
  value = "",
  onChange = () => {},
  options = [],
  className = {
    field: "",
    select: "",
    label: "",
  },
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
          className={cn("text-sm font-semibold", className.label)}
        >
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        className={cn(
          "w-full px-4 py-2.5 ring ring-inset ring-foreground/10 focus:ring-primary focus:ring-2 rounded-md transition-all duration-300",
          className.select,
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={option.selected}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
