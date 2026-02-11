import SectionHeader from "@/shared/components/SectionHeader";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

const cards = [
  {
    title: "How AI Is Reshaping the Future of Work Across Industries",
    author: "Suhela Kanwal",
    img: "/images/news/news.webp",
    publishDate: "February 05, 2026",
  },
  {
    title: "High-Tech Training for Career Growth",
    author: "Suhela Kanwal",
    img: "/images/news/news.webp",
    publishDate: "February 04, 2026",
  },
  {
    title: "AI-Powered Analytics for Smarter Business Decisions",
    author: "uhela Kanwal",
    img: "/images/news/news.webp",
    publishDate: "February 04, 2026",
  },
];

const LatestUpdates = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container pt-20 min-h-screen">
        <SectionHeader
          title="News, Updates & Announcements"
          description="Explore the latest updates, important announcements, and behind-the-scenes news from the team at IT Artificer — all in one place."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(({ title, author, publishDate, img }) => (
            <a key={title} href="#" className="block group">
              <img src={img} alt="" className="w-full h-auto rounded-md" />
              <div className="p-6 bg-background bg-linear-to-b from-background to-primary/50 -translate-y-10 w-[90%] mx-auto rounded-md relative transition-all duration-500 group-hover:-translate-y-16">
                <div className="space-y-2 transition-all duration-300 group-hover:-translate-y-2">
                  <button
                    type="button"
                    className="text-sm hover:text-primary! transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/authors/${author.replace(" ", "-")}`);
                    }}
                  >
                    {author}
                  </button>
                  <p>{publishDate}</p>
                  <h3 className="text-lg font-semibold hover:text-primary! transition-all duration-300">
                    {title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 bg-background ring ring-foreground/20 py-2 px-4 rounded-full w-max absolute top-full left-5 invisible opacity-0 text-secondary transition-all duration-300 group-hover:visible group-hover:-translate-y-1/2 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground font-semibold hover:[&>span]:border-primary-foreground shadow-xs">
                  <span>Read More</span>
                  <span className="border border-secondary rounded-full p-px font-bold transition-all duration-300">
                    <Plus size={12} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
