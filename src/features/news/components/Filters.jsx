import Input from "@/shared/ui/Input";
import cn from "@/shared/utils/cn";

const filterButtons = [
  { name: "All", value: "all" },
  { name: "Blogs", value: "blogs" },
  { name: "News", value: "news" },
  { name: "Events", value: "events" },
];

const Filters = ({ search, handleSearch, filters, handleFilter }) => {
  return (
    <div className="grid grid-cols-6 gap-4 items-center py-1">
      <Input
        type="text"
        placeholder="Search your favorite blogs, news, events..."
        className={{
          field: "col-span-5 sm:col-span-3",
        }}
        value={search}
        onChange={handleSearch}
      />
      <div className="col-span-6 sm:col-span-3 flex gap-2 items-center">
        {filterButtons.map((btn) => (
          <button
            key={btn.value}
            type="button"
            className={cn(
              "ring-1 ring-foreground/20 rounded-lg px-4 py-2 transition-all cursor-pointer",
              btn.value === filters
                ? "bg-primary text-primary-foreground"
                : "bg-transparent hover:ring-primary hover:text-primary",
            )}
            value={btn.value}
            onClick={handleFilter}
          >
            {btn.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
