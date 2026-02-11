import cn from "../utils/cn";

const Divider = ({ className = "" }) => {
  return (
    <div
      className={cn("h-0.5 w-full border-b border-foreground/15", className)}
    />
  );
};

export default Divider;
