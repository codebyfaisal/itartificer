import { ContactInfo } from "@/shared/components";
import { Link } from "react-router";

const company = [
  { name: "Services", link: "/services" },
  { name: "Features", link: "/features" },
  { name: "Latest News", link: "/news-events" },
  { name: "Life At ITA", link: "/life-at-ita" },
  { name: "About Us", link: "/about" },
];

const support = [
  { name: "FAQ's", link: "/faq" },
  { name: "Contact", link: "/contact" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms & Condition", link: "/terms-&-conditions" },
  { name: "Community Guidelines", link: "/community-guidelines" },
];

const Footer = () => {
  return (
    <footer className="bg-linear-to-t from-secondary/10 to-transparent">
      <div className="container">
        <div className="grid grid-cols-1 xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-10 h-full items-start py-20 pb-15">
          <div className="xs:col-span-4 md:col-span-6 lg:col-span-4 flex flex-col items-cente md: items-start">
            <div className="w-full max-w-48">
              <img
                src="/images/logo/itartificer.webp"
                alt="IT Artificer logo"
                className="w-full h-full object-cover -translate-x-3"
              />
            </div>
            <p className="max-w-xl lg:max-w-64">
              Our mission is to simplify technology and empower businesses
              through innovative, end-to-end IT solutions.
            </p>
          </div>

          <div className="xs:col-span-2">
            <h2 className="text-lg font-semibold border-b border-secondary/10 pb-2 mb-4">
              Company
            </h2>
            <ul className="space-y-2 styled-list">
              {company.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-primary transition-all"
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="xs:col-span-2">
            <h2 className="text-lg font-semibold border-b border-secondary/10 pb-2 mb-4">
              Support
            </h2>
            <ul className="space-y-2 styled-list">
              {support.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-primary transition-all styled-list"
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="xs:col-span-4 md:col-span-2 lg:col-span-3">
            <h2 className="text-lg font-semibold border-b border-secondary/10 pb-2 mb-4">
              Address
            </h2>
            <ContactInfo />
          </div>
        </div>
      </div>
      <div className="text-center border-t border-secondary/10 py-6">
        <p>Copyright &copy; 2026. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
