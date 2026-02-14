import { ContactForm, PageHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import Divider from "@/shared/ui/Divider";
import FaqList from "@/shared/components/FaqList";
import { faqs } from "@/shared/db/faq";

const Faq = () => {
  return (
    <>
      <SEO
        title="FAQ"
        description="Frequently Asked Questions about IT Artificer's services, processes, and support."
        path="/faq"
      />
      <PageHeader title="FAQ" />

      <div className="container">
        <div className="[&>section_form]:order-1 [&>section_img]:order-2 space-y-20">
          <FaqList items={faqs} />
          <ContactForm title="Get in touch" />
        </div>
      </div>
    </>
  );
};

export default Faq;
