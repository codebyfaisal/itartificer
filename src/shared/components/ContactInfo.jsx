import { MailIcon, PhoneIcon } from "lucide-react";
import { LuMapPin } from "react-icons/lu";
import { itArtificerData } from "../data/contact";

const ContactInfo = () => {
  const { address, email, phone } = itArtificerData;
  return (
    <ul className="space-y-2">
      <li className="flex items-center gap-2">
        <span className="min-w-6 flex items-center">
          <LuMapPin className="text-primary" size={19} />
        </span>
        <span>{address[0]}</span>
      </li>
      <li className="flex items-center gap-2">
        <span className="min-w-6 flex items-center">
          <MailIcon className="text-primary" size={18} />
        </span>
        Email: {email.info}
      </li>

      <li className="flex items-center gap-2">
        <span className="min-w-6 flex items-center">
          <PhoneIcon className="text-primary" size={18} />
        </span>
        Phone: {phone[0]}
      </li>
    </ul>
  );
};

export default ContactInfo;
