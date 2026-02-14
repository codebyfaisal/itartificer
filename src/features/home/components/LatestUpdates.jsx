import { Button } from "@/shared/ui";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SectionHeader } from "@/shared/components";
import BlogsSection from "@/shared/components/BlogsSection";
import { blogs } from "@/shared/db/blogs";

const LatestUpdates = () => {
  return (
    <section>
      <div className="container relative z-10 overflow-hidden">
        <div className="flex items-end justify-between mb-15">
          <SectionHeader
            title="News & Events"
            description="Explore our upcoming events and latest insights, from thought leadership to breaking news."
            align="left"
            className="p-0"
          />

          <Link to="/news" aria-label="View all news and articles">
            <Button variant="outline">
              View All Articles <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogsSection blogs={blogs.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
