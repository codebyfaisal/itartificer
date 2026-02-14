import React from "react";
import cn from "@/shared/utils/cn";

const SectionHeader = ({ title, description, className, align = "center" }) => {
  return (
    <div
      className={cn(
        "space-y-3 max-w-xl pb-14 flex flex-col justify-center",
        align === "center" && "text-center items-center mx-auto",
        align === "start" && "text-start items-start mx-0",
        align === "end" && "text-end items-end mx-0",
        className,
      )}
    >
      <h2 className="text-3xl font-medium">{title}</h2>
      <div
        className={cn(
          "w-24 h-4 relative overflow-hidden",
          align === "center" && "mx-auto",
          align === "start" && "ml-0",
          align === "end" && "mr-0",
        )}
      >
        <div className="absolute top-1/2 left-0 w-full h-1.25 bg-primary/40 -translate-y-1/2 rounded-full" />
        <div className="size-2.5 bg-primary rounded-full absolute top-1/2 -translate-y-1/2 animate-[slide_3s_linear_infinite_alternate] left-0" />
      </div>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default SectionHeader;
