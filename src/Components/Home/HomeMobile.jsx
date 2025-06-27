import React, { useState } from "react";
import NavBar from "./HomeNavbar";
import { TfiMenu } from "react-icons/tfi";

function MobileNavBar() {
  const [IsClicked, setIsClicked] = useState(false);

  function OnButtonClicked() {
    !IsClicked ? setIsClicked(true) : setIsClicked(false);
  }
  return (
    <div className="block md:hidden ">
      <button onClick={OnButtonClicked} className="text-coolblue-500">
        <TfiMenu />
      </button>
      <NavBar
        Style="block md:hidden w-full"
        NavStyle={IsClicked ? "mobileNav" : "hidden"}
      />
    </div>
  );
}

export default MobileNavBar;
