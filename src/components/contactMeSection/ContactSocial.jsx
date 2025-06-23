import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sanjana-bilgoji-b68303246/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Sanjana-Bilgoji/" Icon={FiGithub} />
      <SingleContactSocial link="https://wa.me/917483196366" Icon={FaWhatsapp } />
    </div>
  );
};

export default ContactSocial;