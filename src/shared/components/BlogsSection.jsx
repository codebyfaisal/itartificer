import { Link } from "react-router";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";
import Card from "@/shared/ui/Card";

const BlogsSection = ({ blogs }) => {
  if (!blogs) return null;
  return blogs.map((blog, index) => <BlogsCard key={index} blog={blog} />);
};

const BlogsCard = ({ blog }) => {
  if (!blog) return null;

  const { title, author, date, description, image, slug } = blog;

  return (
    <Card variant="interactive" className="h-full group flex flex-col p-0">
      <Link
        to={slug}
        className="block overflow-hidden relative"
        aria-label={title}
      >
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            title={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1.5">
            <FaUser size={12} />
            <span className="truncate">{author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <FaCalendar size={12} />
            <span>{date}</span>
          </span>
        </div>

        <Link
          to={slug}
          className="group-hover:text-primary transition-colors block mb-3"
          aria-label={title}
        >
          <h3 className="text-lg md:text-xl font-bold leading-tight line-clamp-2">
            {title}
          </h3>
        </Link>

        {description && (
          <p className="text-foreground/70 text-sm md:text-base line-clamp-3 mb-4 grow">
            {description}
          </p>
        )}

        <div className="mt-auto pt-2">
          <Link
            to={slug}
            className="inline-flex items-center text-primary font-medium text-sm hover:underline gap-1 group/link"
            aria-label={`Read full article: ${title}`}
          >
            Read More
            <FaArrowRight
              size={12}
              className="transition-transform group-hover/slug:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default BlogsSection;
