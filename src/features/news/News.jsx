import { useEffect, useState } from "react";
import { PageHeader } from "@/shared/components";
import Filters from "./components/Filters";
import NewsCards from "./components/NewsCards";
import { useSearchParams } from "react-router";

const cards = [
  {
    title: "How AI Is Reshaping the Future of Work Across Industries",
    author: "Suhela Kanwal",
    date: "February 05, 2026",
    description:
      "AI is transforming the future of work by enhancing efficiency, automation, and innovation across industries.",
  },
  {
    title: "High-Tech Training for Career Growth",
    author: "Suhela Kanwal",
    date: "February 04, 2026",
    description:
      "How IT Artificer Empowers Youth & Professionals with Future-Ready Digital Skills In today's competitive world, education alone is no longer enough to build a strong career. Industries are rapidly evolving due to digital transformation, automation, artificial intelligence, cloud computing, and emerging technologies. This shift has created an urgent demand for professionals who are not only",
  },
  {
    title: "AI-Powered Analytics for Smarter Business Decisions",
    author: "Suhela Kanwal",
    date: "February 04, 2026",
    description:
      "AI-powered analytics enables smarter, data-driven business decisions for better performance and growth.",
  },
  {
    title: "Top Custom Software Development Trends in 2026",
    author: "Suhela Kanwal",
    date: "February 04, 2026",
    description:
      "Explore the top custom software development trends in 2026, from AI-driven tools to cloud-native solutions.",
  },
];

const tags = [
  "AI",
  "Software Development",
  "Cloud Computing",
  "Cybersecurity",
  "Data Science",
  "Machine Learning",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Digital Marketing",
];

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

  useEffect(() => {
    console.log([...searchParams]);
  }, [searchParams]);

  return (
    <>
      <PageHeader title="News & Events" />

      <section>
        <div className="container">
          <Filters
            search={search}
            handleSearch={handleSearch}
            filters={filters}
            handleFilter={handleFilter}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
            <div className="col-span-2">
              <NewsCards cards={cards} />
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
