import ButtonAnimation from "../UI/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactCard from "./ContactCard";
import { LuMail } from "react-icons/lu";

const contacts = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Sudhagar-242/",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/sudhagar242/",
  },
];
function Contact() {
  return (
    <section
      className="w-full md:h-[15svh] flex flex-col md:flex-row  justify-around items-center bg-coolblue-300/50"
      id="Contact"
    >
      <h1 className="md:w-2/6 md:text-center w-full text-6xl font-mono font-bold md:mb-0 mb-8">
        Contact
      </h1>
      <div className="flex flex-2/5 justify-evenly w-full md:mb-0 mb-8">
        {contacts.map((data) => (
          <ContactCard key={Math.random()} icon={data.icon} href={data.href} />
        ))}
      </div>
      <div className="flex-1/5">
        <ButtonAnimation
          className=" text-coolblue-200 bg-coolblue-400 w-[50svh] md:w-3/4 h-fit m-auto text-2xl"
          iconstyle="group-hover:text-coolblue-500 pl-4"
          typestyle=""
          scrollcolor={"group-hover:bg-coolblue-100"}
          icon={<LuMail />}
          type="Email"
          href="mailto:sudhagar24205@gmail.com"
        />
      </div>
    </section>
  );
}

export default Contact;
