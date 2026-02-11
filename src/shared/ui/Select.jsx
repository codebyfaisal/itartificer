import React from "react";
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
    <div className={cn("flex flex-col", className.field)}>
      {label && (
        <label htmlFor={id} className={cn("font-semibold", className.label)}>
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        className={cn(
          "px-4 py-2.5 ring ring-foreground/20 focus:ring-primary focus:ring-2 rounded-md",
          className.select,
        )}
      >
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
