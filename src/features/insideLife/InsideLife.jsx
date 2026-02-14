import { PageHeader, SectionHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { lifeAtIta } from "@/shared/db/lifeAtIta";
import { Card } from "@/shared/ui";
import * as LucideIcons from "lucide-react";

const InsideLife = () => {
  const { header, values, gallery } = lifeAtIta;

  return (
    <>
      <SEO
        title={header.title}
        description={
          header.description ||
          "Discover the culture, values, and daily life at IT Artificer."
        }
        path="/life-at-ita"
      />
      <PageHeader title={header.title} />

      {/* Core Values Section */}
      <section>
        <div className="container">
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide us every day."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = LucideIcons[value.icon] || LucideIcons.Star;
              return (
                <Card
                  key={index}
                  className="p-6 text-center space-y-4 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-2">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <div className="py-10"></div>

      {/* Gallery Section */}
      <section>
        <div className="container">
          <SectionHeader
            title="Moments at ITA"
            description="A glimpse into our daily life, events, and culture."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-video shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-foreground font-bold text-xl uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InsideLife;
