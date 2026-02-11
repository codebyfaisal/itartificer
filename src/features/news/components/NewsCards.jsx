import { Link } from "react-router";
import { FaArrowRight, FaCalendar, FaUser } from "react-icons/fa";
import { StepBack, StepForward } from "lucide-react";
import { Button } from "@/shared/ui";

const NewsCards = ({ cards }) => {
  return (
    <>
      <div className="columns-2 space-x-4 space-y-8 py-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="break-inside-avoid hover:-translate-y-2 rounded-lg border border-border/40 bg-background text-foreground shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <Link to={`/news/${i}`} className="block">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1506748786380-4e727fd4d951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt={card.title + " image"}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-6 pt-0">
              <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">
                <Link
                  to={`/news/${i}`}
                  className="hover:text-primary transition-colors"
                >
                  {card.title}
                </Link>
              </h3>
              <div className="flex items-center gap-4 text-sm mb-4">
                <span className="flex items-center gap-2 text-primary">
                  <FaUser />
                  <a href="" className="cursor-pointer hover:underline">
                    {card.author}
                  </a>
                </span>
                <span className="flex items-center gap-2 text-secondary/70">
                  <FaCalendar />
                  {card.date}
                </span>
              </div>
              <p className="text-secondary/80">{card.description}</p>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link
                to={`/news/${i}`}
                className="text-primary flex items-center gap-2 group w-max font-medium"
              >
                Read More
                <FaArrowRight className="group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full">
          <StepBack size={20} />
        </Button>
        <Button size="icon" className="rounded-full text-lg">
          1
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <StepForward size={20} />
        </Button>
      </div>
    </>
  );
};

export default NewsCards;
