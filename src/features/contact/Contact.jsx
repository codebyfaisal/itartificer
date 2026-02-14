import { PageHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Location from "./components/Location";

const Contact = () => (
  <>
    <SEO
      title="Contact Us"
      description="Get in touch with IT Artificer for your software development needs. We are here to help you grow your business."
      path="/contact"
    />
    <PageHeader title="Contact Us" />

    <ContactForm />
    <div className="p-8 lg:p-10"></div>
    <Contacts />
    <div className="p-8 lg:p-10"></div>
    <Location />
  </>
);

export default Contact;
