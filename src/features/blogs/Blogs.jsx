import { useEffect, useState } from "react";
import { PageHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import Filters from "./components/Filters";
import { useSearchParams } from "react-router";
import BlogsSection from "@/shared/components/BlogsSection";

import { blogs as cards, tags } from "@/shared/db/blogs";

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [filters, setFilters] = useState(searchParams.get("tab") || "all");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilters(e.target.value);
  };

  useEffect(() => {}, [searchParams]);

  return (
    <>
      <SEO
        title="News & Events"
        description="Stay updated with the latest news, events, and insights from IT Artificer."
        path="/news-events"
      />
      <PageHeader title="News & Events" />

      <section>
        <div className="container space-y-10">
          <Filters
            search={search}
            handleSearch={handleSearch}
            filters={filters}
            handleFilter={handleFilter}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <BlogsSection blogs={cards} />
              </div>
            </div>
            <div className="col-span-1">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <button
                      key={i}
                      type="button"
                      className="shadow-sm text-primary flex items-center justify-center rounded-sm ring ring-primary/20 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all px-3 py-1.5"
                      onClick={() =>
                        setSearchParams((searchParams) => {
                          searchParams.set("tag", tag.toLowerCase());
                          searchParams.delete("tab");
                          return searchParams;
                        })
                      }
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
