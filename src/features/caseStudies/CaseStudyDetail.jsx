import { PageHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { useParams, Navigate } from "react-router";
import { caseStudies } from "@/shared/db/caseStudies";
import * as LucideIcons from "lucide-react";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" />;
  }

  const Icon = LucideIcons[project.icon] || LucideIcons.FileText;

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        path={`/case-studies/${slug}`}
      />
      <PageHeader title={project.title} />
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-6 p-6 bg-primary/5 rounded-xl">
            <div className="p-4 bg-background rounded-full shadow-sm">
              <Icon size={48} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {project.title}
              </h1>
              <p className="text-muted-foreground">Case Study</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-foreground">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              {project.description}
            </p>

            {/* Extended content dummy placeholder */}
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  The Challenge
                </h3>
                <p className="text-foreground/70">
                  The client faced significant challenges in their legacy
                  systems, resulting in operational inefficiencies and data
                  silos. They needed a solution that would integrate seamlessly
                  with their existing infrastructure while providing scalability
                  for future growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Our Solution
                </h3>
                <p className="text-foreground/70">
                  We orchestrated a comprehensive digital transformation
                  strategy. By leveraging cutting-edge technologies and
                  user-centric design principles, we developed a system that not
                  only met their current needs but also positioned them for
                  future success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Key Results
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                  <li>50% increase in operational efficiency</li>
                  <li>Real-time data visibility across all departments</li>
                  <li>Enhanced user experience and adoption rates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail;
