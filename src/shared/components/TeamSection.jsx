import { useState, useRef, useEffect } from "react";
import { SectionHeader } from "@/shared/components";
import cn from "@/shared/utils/cn";
import { Card } from "../ui";

import { team } from "@/shared/db/team";

const TeamSection = () => {
  const [cardData, setCardData] = useState(team[0]);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseOver = (m) => {
    setCardData(m);
    clearTimeout(timerRef.current);
  };
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setCardData(team[0]);
    }, 2000);
  };

  return (
    <section>
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container relative z-10">
          <SectionHeader
            title="Meet the Minds Behind IT Artificer"
            description="Get to know the passionate professionals, creative thinkers, and tech experts who turn bold ideas into real-world digital solutions."
            className="mb-20"
          />

          {/* Bubble Layout Container */}
          <div className="min-h-[70vh] w-full mx-auto hidden md:grid grid-cols-12">
            <div className="relative col-span-8 lg:col-span-9">
              {/* Connector Lines (Decorative) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Lines connecting center to others - simplified positions */}
                <line
                  x1="50%"
                  y1="20%"
                  x2="20%"
                  y2="40%"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
                <line
                  x1="50%"
                  y1="20%"
                  x2="80%"
                  y2="30%"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
                <line
                  x1="50%"
                  y1="20%"
                  x2="50%"
                  y2="80%"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
              </svg>

              {/* 1. CEO - Center */}
              <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <TeamBubble
                  member={team[0]}
                  className="w-56 h-56 md:w-64 md:h-64 border-primary/50 shadow-[0_0_50px_rgba(0,212,219,0.3)]"
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                />
              </div>

              {/* 2. COO - Top Leftish */}
              <div
                className="absolute top-[20%] left-[10%] animate-float"
                style={{ animationDelay: "0s" }}
              >
                <TeamBubble
                  member={team[1]}
                  className="w-42 h-42 md:w-50 md:h-50"
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                />
              </div>

              {/* 3. BD - Top Rightish */}
              <div
                className="absolute top-[15%] right-[10%] animate-float"
                style={{ animationDelay: "2s" }}
              >
                <TeamBubble
                  member={team[2]}
                  className="w-34 h-34 md:w-42 md:h-42"
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                />
              </div>

              {/* 4. PM - Bottom Center */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-float"
                style={{ animationDelay: "4s" }}
              >
                <TeamBubble
                  member={team[3]}
                  className="w-32 h-32 md:w-40 md:h-40"
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                />
              </div>

              {/* Decorative Small Bubbles */}
              <div className="absolute top-[60%] left-[20%] w-12 h-12 rounded-full bg-primary/10 blur-sm animate-pulse" />
              <div className="absolute top-[30%] right-[25%] w-8 h-8 rounded-full bg-secondary/30 blur-sm animate-pulse" />
            </div>

            <Card className="h-max col-span-4 lg:col-span-3 text-center grid place-items-center">
              <img
                src={cardData.image}
                alt={cardData.name}
                className="w-30 h-30 object-cover rounded-full"
              />
              <div className="pt-4 pb-2">
                <h3 className="text-lg leading-tight">{cardData.name}</h3>
                <h2 className="text-lg font-bold! text-primary! uppercase tracking-wide">
                  {cardData.role}
                </h2>
              </div>
              <p className="text-muted-foreground leading-tight">
                {cardData.description}
              </p>
            </Card>
          </div>

          {/* Mobile View - Horizontal Scroll or Grid */}
          <div className="md:hidden grid sm:grid-cols-2 gap-8">
            {team.map((member) => (
              <Card
                key={member.role}
                className="text-center grid place-items-center px-3 hover:bg-foreground/10"
              >
                <img
                  src={member.image}
                  alt=""
                  style={{
                    width: `${member.size * 100}px`,
                    height: `${member.size * 100}px`,
                  }}
                  className="rounded-full"
                />
                <div className="pt-4 pb-2">
                  <h3 className="text-lg leading-tight">{member.name}</h3>
                  <h2 className="text-lg font-bold! text-primary! uppercase tracking-wide">
                    {member.role}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-tight">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamBubble = ({
  member = null,
  className = "",
  onMouseOver = () => {},
  onMouseLeave = () => {},
}) => {
  if (!member) return null;
  return (
    <div
      className={cn(
        "group relative rounded-full border-4 border-foreground/10 bg-background overflow-visible transition-all duration-500 hover:scale-110 hover:border-primary cursor-pointer hover:z-50",
        className,
      )}
      onMouseOver={() => onMouseOver(member)}
      onMouseLeave={() => onMouseLeave()}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

export default TeamSection;
