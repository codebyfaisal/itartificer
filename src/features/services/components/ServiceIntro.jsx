import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const ServiceIntro = ({ title = "", subTitle = "", description = [] }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link to="/services" aria-label="Services">
            Services
          </Link>
          <div className="flex items-center">
            <ChevronRight size={16} />
            <ChevronRight size={16} />
          </div>
          <p className="opacity-70">{title}</p>
        </div>
        {subTitle && (
          <h2 className="text-lg font-medium text-muted-foreground">
            {subTitle}
          </h2>
        )}
      </div>

      <div className="space-y-4 text-justify">
        {description.map((desc, index) => (
          <p
            key={index}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceIntro;
