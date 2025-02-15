import React, { useEffect, useRef } from "react";
import tray from "../assets/tray.png";
import "../index.css";

const Menu = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.setAttribute("data-animated", "true");
    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  };

  return (
    <div className="bg-red-600 mb-2">
      <div className="flex items-center justify-center gap-2">
        <img src={tray} alt="" className="w-10" />
        <span className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase font-oswald">
          Best Food
        </span>
      </div>

      <div className="scroller">
        <ul ref={scrollerRef} className="taglist scroller-inner flex gap-4 animate-scroll">
          {["Html", "CSS", "JavaScript", "React", "Tailwind", "BootStrap", "Native", "Wordpress"].map((tag, index) => (
            <li key={index} className="px-4 py-2 bg-gray-200 rounded-md shadow-md">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
