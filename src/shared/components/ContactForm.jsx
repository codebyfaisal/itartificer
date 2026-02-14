import { useState } from "react";
import { Input, Textarea, Checkbox, Button } from "@/shared/ui";

const initialFormData = {
  name: "",
  email: "",
  message: "",
  phone: "",
  subject: "",
  terms: false,
};

const initialFormError = {
  name: "",
  email: "",
  message: "",
  phone: "",
  subject: "",
};

const ContactForm = ({ title = null }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
    setFormError((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";

    setFormError(errors);

    if (Object.keys(errors).length > 0) {
      document
        .querySelector("main")
        .scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
  };
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* <div> */}
        <img
          src="/images/contact-us.webp"
          alt=""
          className="w-full h-auto rounded-md object-cover"
        />
        {/* </div> */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {title && (
            <h2 className="text-3xl font-bold text-secondary">{title}</h2>
          )}
          <Input
            type="text"
            placeholder="e.g faisal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={formError.name}
          />

          <Input
            type="email"
            placeholder="e.g faisal@gmail.com"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={formError.email}
          />

          <Input
            type="text"
            placeholder="e.g 03123456789"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={formError.phone}
          />
          <Input
            type="text"
            placeholder="Subject"
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            error={formError.subject}
          />
          <Textarea
            placeholder="Message"
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={formError.message}
            rows={4}
          />

          <Checkbox
            label={
              <span className="flex flex-wrap items-center gap-1">
                By checking this, you agree to our
                <a href="#" className="hover:text-primary">
                  Terms
                </a>
                and
                <a href="#" className="hover:text-primary">
                  Privacy policy
                </a>
              </span>
            }
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto shadow-lg shadow-primary/30 transition-transform hover:-translate-y-1"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
