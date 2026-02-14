import { Link } from "react-router";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Button } from "@/shared/ui";
import { ArrowRight } from "lucide-react";

const company = [
  { name: "Software Development", slug: "/services/software-development" },
  { name: "Mobile App Development", slug: "/services/mobile-app-development" },
  { name: "AI & Data Solutions", slug: "/services/ai-data-solutions" },
  { name: "Domain & Cloud Hosting", slug: "/services/domain-cloud-hosting" },
  { name: "Data Security Services", slug: "/services/data-security-services" },
];

const resources = [
  { name: "News & Events", slug: "/news-events" },
  { name: "Case Studies", slug: "/case-studies" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-foreground/5 pt-20 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-x-12 mb-20">
          {/* Brand Column (Left) */}
          <div className="bg-foreground/5 rounded-2xl p-8 backdrop-blur-sm border border-foreground/10 flex flex-col h-full min-h-100">
            <div className="flex-1">
              <div>
                <img
                  src="/images/logo/itartificer-white.webp"
                  alt="IT Artificer"
                  className="w-40 mb-10"
                />
              </div>

              <p>
                Our mission is to simplify technology and empower businesses
                through innovative, end-to-end IT solutions.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <a
                href="mailto:info@itartificer.com"
                className="text-primary/70 hover:text-primary transition-colors block"
              >
                info@itartificer.com
              </a>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-foreground text-secondary flex items-center justify-center hover:bg-primary hover:text-foreground transition-all"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-foreground text-secondary flex items-center justify-center hover:bg-primary hover:text-foreground transition-all"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Links Column (Middle) */}
          <div className="flex flex-col gap-12 sm:text-right lg:text-center">
            <div>
              <h3 className="text-foreground font-bold mb-6 border-b border-foreground/20 pb-2 inline-block">
                What We Do
              </h3>
              <ul className="space-y-4">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.slug}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-bold mb-6 border-b border-foreground/20 pb-2 inline-block">
                Resources
              </h3>
              <ul className="space-y-4">
                {resources.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.slug}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column (Right) */}
          <div className="bg-foreground/5 rounded-2xl p-8 backdrop-blur-sm border border-foreground/10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-foreground/70 text-sm mb-8 leading-relaxed">
              Stay up to date on IT Artificer's latest products, expert
              insights, resources, and more!
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-foreground rounded-full px-6 py-4 text-secondary placeholder:text-secondary/50 outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="bg-foreground p-3 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-foreground/50 rounded-sm"></div>
                  <span className="text-xs text-gray-600">I'm not a robot</span>
                </div>
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  className="w-8 opacity-50"
                />
              </div>

              <p className="text-xs text-foreground/50 leading-relaxed">
                Please note that by submitting this form, you understand that
                you will be added to the IT Artificer Mailing List.
              </p>

              <Button className="w-auto rounded-full bg-primary hover:bg-primary/90 text-foreground px-8 py-3">
                Subscribe Now <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-background/60 to-transparent"></div>

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40 gap-4">
          <p>&copy; 2026 IT Artificer Limited</p>
          <div className="flex gap-x-6 flex-wrap items-center justify-center">
            <Link
              to="/terms-&-conditions"
              className="hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p>
            Design / Build{" "}
            <span className="text-primary font-bold">IT Artificer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
