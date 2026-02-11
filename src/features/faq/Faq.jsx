import { ContactForm, PageHeader } from "@/shared/components";
import Divider from "@/shared/ui/Divider";
import FaqList from "@/shared/components/FaqList";

const Faq = () => {
  return (
    <>
      <PageHeader title="FAQ" />

      <div className="container">
        <div className="[&>section_form]:order-1 [&>section_img]:order-2 space-y-20">
          <FaqList items={[]} />
          <ContactForm title="Get in touch" />
        </div>
      </div>
    </>
  );
};

export default Faq;
