import React, { useEffect } from "react";
import { Check } from "lucide-react";
import cn from "../utils/cn";

const Checkbox = ({
  label = null,
  checked = false,
  onChange = () => {},
  className = {
    field: "",
    input: "",
    label: "",
  },
  ...props
}) => {
  return (
    <label
      className={cn(
        "flex items-center gap-2 select-none relative cursor-pointer group",
        className.field,
      )}
    >
      <div className="relative flex items-center justify-center mt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={cn("peer sr-only", className.input)}
          {...props}
        />
        <div className="size-4 rounded-[0.22rem] border border-primary bg-transparent peer-checked:bg-primary/10 transition-colors"></div>
        <Check
          className={cn(
            "absolute size-3 text-primary transition-all duration-200 ease-out origin-center pointer-events-none",
            checked ? "scale-100 opacity-100" : "scale-50 opacity-0",
          )}
          strokeWidth={4}
        />
      </div>

      {label && (
        <span className={cn("text-sm leading-tight", className.label)}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
