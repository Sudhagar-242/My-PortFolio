import ButtonAnimation from "../UI/Button";
import { LuMail } from "react-icons/lu";

function BodyPara() {
  return (
    <div className="md:w-3/5 w-full md:py-[10%] pr-8 ">
      <i className="text-coolblue-300 font-nue font-bold text-2xl md:text-3xl">
        Hello !!!{" "}
        <span className="text-5xl hover:animate-shake inline-block transform origin-bottom">
          👋🏼
        </span>
      </i>
      <h1 className=" font-zilla text-coolblue-500 font-bold text-6xl my-3">
        I'm Sudhagar
      </h1>
      <h3 className="bg-coolblue-300 font-nue text-coolblue-100 font-bold text-3xl inline-block tracking-widest p-2 ">
        Frontend Developer
      </h3>
      <p className="font-serif text-2xl leading-9  md:pr-8 md:mb-4">
        I create clean, modern, and fully responsive websites that blend
        seamless design with functionality.
      </p>
      <ButtonAnimation
        className=" text-coolblue-100 bg-coolblue-300 w-full md:w-3/4 h-fit text-2xl font-zilla font-bold"
        iconstyle="group-hover:text-coolblue-100 pl-4"
        typestyle=""
        scrollcolor={"group-hover:bg-coolblue-400"}
        icon={<LuMail />}
        type="Email"
        href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJfSHrTXGFQndLgQLvLNxQcRkCdhkgWWkqsVPRkvjwWHjTfCLFHXTqQcdwWknwQKdD"
      />
    </div>
  );
}

export default BodyPara;
