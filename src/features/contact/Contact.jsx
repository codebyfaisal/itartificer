import { PageHeader } from "@/shared/components";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Location from "./components/Location";

const Contact = () => (
  <>
    <PageHeader title="Contact Us" />

    <ContactForm />
    <Contacts />
    <Location />
  </>
);

export default Contact;
