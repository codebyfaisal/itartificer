import Divider from "@/shared/ui/Divider";

const ServiceIntro = ({ title = "", subTitle = "", description = [] }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h1>
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
