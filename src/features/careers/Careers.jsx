import { useState } from "react";
import { PageHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { Input, Select } from "@/shared/ui";
import { SquareArrowRight } from "lucide-react";
import { Link } from "react-router";

const careers = [
  {
    id: 1,
    title: "MERN Stack Developer",
    type: "Full-time",
    category: "Developer",
    location: "Peshawar Head Branch",
  },
  {
    id: 2,
    title: "Senior HR Manager",
    type: "Full-time",
    category: "HR",
    location: "Peshawar",
  },
  {
    id: 3,
    title: "Business Developer",
    type: "Full-time",
    category: "HR",
    location: "Peshawar",
  },
];

const initialFilters = {
  search: "",
  type: "",
  category: "",
  location: "",
};

const Career = () => {
  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const filteredCareers = careers.filter((career) => {
    return (
      (filters.search === "" ||
        career.title.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.type === "" ||
        career.type.toLowerCase() === filters.type.toLowerCase()) &&
      (filters.category === "" ||
        career.category.toLowerCase() === filters.category.toLowerCase()) &&
      (filters.location === "" ||
        career.location.toLowerCase() === filters.location.toLowerCase())
    );
  });

  return (
    <>
      <SEO
        title="Careers"
        description="Join the IT Artificer team! Check out our current job openings and career opportunities."
        path="/careers"
      />
      <PageHeader title="Careers" />

      <section>
        <div className="container space-y-10">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-2">
            <Input
              type="text"
              placeholder="Search Job"
              label="Search Job"
              name="search"
              value={filters.search}
              onChange={handleChange}
              className={{ field: "col-span-1" }}
            />
            <Select
              placeholder="Type"
              label="Job Type"
              name="type"
              value={filters.type}
              onChange={handleChange}
              options={[
                { value: "", label: "All Types", selected: true },
                { value: "full-time", label: "Full-time" },
                { value: "part-time", label: "Part-time" },
                { value: "contract", label: "Contract" },
                { value: "internship", label: "Internship" },
              ]}
            />
            <Select
              placeholder="Category"
              label="Job Category"
              name="category"
              value={filters.category}
              onChange={handleChange}
              options={[
                { value: "", label: "All Categories", selected: true },
                { value: "developer", label: "Developer" },
                { value: "hr", label: "HR" },
              ]}
            />
            <Select
              placeholder="Location"
              label="Job Location"
              name="location"
              value={filters.location}
              onChange={handleChange}
              options={[
                { value: "", label: "All Locations", selected: true },
                { value: "peshawar", label: "Peshawar" },
              ]}
            />
          </div>

          {/* Job List */}
          <div className="space-y-4 px-2">
            {filteredCareers.length > 0 ? (
              filteredCareers.map((career) => (
                <div
                  key={career.id}
                  className="py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-foreground/5 shadow-xs"
                >
                  <h3 className="text-xl font-semibold flex-1 min-w-50">
                    <Link
                      to="/"
                      className="text-xl! underline decoration-1 hover:decoration-2 underline-offset-2 transition-all text-primary"
                      aria-label={career.title}
                    >
                      {career.title}
                    </Link>
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-foreground/70 md:flex-1">
                    <span className="w-25">{career.type}</span>
                    <span className="w-25">{career.category}</span>
                    <span className="flex-1 min-w-37.5">{career.location}</span>
                  </div>

                  <Link
                    to="/"
                    className="text-primary font-medium flex items-center gap-2 hover:underline decoration-2 underline-offset-4 transition-all whitespace-nowrap w-full lg:w-auto group"
                    aria-label="More Details"
                  >
                    More Details
                    <SquareArrowRight
                      size={16}
                      className="transition-all group-hover:scale-120"
                    />
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg">No jobs found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
