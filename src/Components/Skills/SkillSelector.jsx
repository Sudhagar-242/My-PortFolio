import React, { useState, useEffect } from "react";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import { SiFramework } from "react-icons/si";

function SkillSelector(props) {
  const [Selected, setSelected] = useState(props.Selected);

  useEffect(() => {
    props.OnTechSelection(Selected);
  }, [Selected]);

  function LanguagesPressed() {
    setSelected("Languages");
  }

  function framePressed() {
    setSelected("Frameworks");
  }

  function toolPressed() {
    setSelected("Tools");
  }

  return (
    <div className="h-7/12 flex flex-col justify-around hiderzoomquick">
      <h1 className="text-center text-3xl -mb-8  tracking-widest font-nue transition-all duration-200 delay-75">
        {Selected}
      </h1>
      <div className="flex justify-evenly gap-10 py-1.5 text-coolblue-200">
        <button
          className={
            Selected === "Languages"
              ? "bg-coolblue-100 text-coolblue-400  box-border rounded-full text-3xl p-2"
              : "bg-coolblue-300  hover:text-coolblue-100  box-border rounded-full text-3xl p-2"
          }
          id="Languages"
          onClick={LanguagesPressed}
        >
          <FaLaptopCode />
        </button>
        <button
          className={
            Selected === "Frameworks"
              ? "bg-coolblue-100 text-coolblue-400  box-border rounded-full text-3xl p-2"
              : "bg-coolblue-300 hover:text-coolblue-100  box-border rounded-full text-3xl p-2"
          }
          value="back"
          onClick={framePressed}
        >
          <SiFramework />
        </button>
        <button
          className={
            Selected === "Tools"
              ? "bg-coolblue-100 text-coolblue-400  box-border rounded-full text-3xl p-2"
              : "bg-coolblue-300 hover:text-coolblue-100  box-border rounded-full text-3xl p-2"
          }
          value="Tools"
          onClick={toolPressed}
        >
          <FaTools />
        </button>
      </div>
    </div>
  );
}

export default SkillSelector;
