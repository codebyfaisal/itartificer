import { PageHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { useParams, Navigate } from "react-router";
import { blogs } from "@/shared/db/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.description}
        path={`/news-events/${slug}`}
        image={blog.image}
      />
      <PageHeader title={blog.title} />
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <img
            src={blog.image}
            alt={blog.title || "Blog Post Image"}
            className="w-full aspect-video object-cover rounded-xl shadow-lg"
          />

          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-foreground/80">
              {blog.description}
            </p>
            {blog.content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : (
              <p>Full content coming soon...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
