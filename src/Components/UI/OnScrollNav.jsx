import React, { useState, useEffect } from "react";

import Header from "../Home/HomeHeader";

function ScrollNav() {
  const [IsScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentY = window.scrollY;
      setIsScrolled(currentY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full md:z-50  px-[10%]">
      {IsScrolled && (
        <Header className="bg-coolblue-100/30 transition-all duration-1000 delay-500 slidein" />
      )}
    </div>
  );
}

export default ScrollNav;
