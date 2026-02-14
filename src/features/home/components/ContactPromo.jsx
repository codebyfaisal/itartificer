import { Button } from "@/shared/ui";
import { ArrowRight } from "lucide-react";

const ContactPromo = () => {
  return (
    <section>
      <div className="bg-primary py-20 text-primary-foreground relative overflow-hidden">
        {/* Background decoration matching reference - subtle radial or shapes if needed */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-multiply"></div>

        <div className="container relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Ready to Talk?
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mb-10 opacity-90 leading-relaxed">
            Book a meeting with IT Artificer to find out how we can help you to
            turn your AI goals into AI reality and unlock the full potential of
            your data.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary">Book a Meeting</Button>

            <Button
              variant="secondary"
              className="rounded-full"
              aria-label="Contact Arrow"
            >
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPromo;
