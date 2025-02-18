import React, { useEffect, useRef } from "react";
import menu from "../assets/dish.png";
import burgerImage from "../assets/menu-vector-1.png";
import backgroundImage from "../assets/menu-vector-2.png";
import menu1 from "../assets/menu-1.png";
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

    if (scroller.getAttribute("data-animated") === "true") return;
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller-inner");
    const items = Array.from(scrollerInner.children);

    items.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  };

  return (
    <div className="bg-red-600 mb-4 py-4 relative">
      {/* ✅ Header */}
      <div className="flex items-center justify-center gap-3">
        <img src={menu} alt="menu Icon" className="w-10" />
        <span className="text-xl lg:text-2xl font-bold text-white tracking-wide uppercase font-oswald">
          Special Menu
        </span>
      </div>

      {/* ✅ Scroller */}
      <div ref={scrollerRef} className="scroller mx-auto">
        <ul className="taglist scroller-inner flex gap-6">
          {[
            { text: "Chicken Pizza", underline: true },
            { text: "Grilled Chicken", underline: false },
            { text: "Chicken Kabab", underline: true },
            { text: "Special Burgers", underline: false },
            { text: "Chicken Noodles", underline: true },
            { text: "Chinese Pasta", underline: false },
          ].map((item, index) => (
            <li
              key={index}
              className="px-6 py-3 bg-gray-200 text-lg lg:text-6xl rounded-lg shadow-lg"
              style={{ textDecoration: item.underline ? "underline" : "none" }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Images */}
      <div className="relative mt-6 ">
        <img src={burgerImage} alt="Burger Image" className="w-40 md:w-64" />

        {/* ✅ Background Image (Right Side) */}
        <img
          src={backgroundImage}
          alt="Background Image"
          className="absolute right-0 top-0 w-40 md:w-64"
        />

        {/* ✅ Centered Buttons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex flex-wrap justify-center gap-3 w-[90%] lg:w-[60%]">
          {["Fast Food", "Drink & Juice", "Pizza", "Fresh Pasta"].map(
            (category, index) => (
              <button
                key={index}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 hover:bg-orange-600"
              >
                {category}
              </button>
            )
          )}
          
          
          <div className="grid grid-cols-2 gap-6 ">
          <div className="flex items-center justify-between border-dotted border-2 border-gray-400 p-4 rounded-md w-96">
            <div className="flex items-center space-x-4">
              <img src={menu1} alt="Chinese Pasta" className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h2 className="text-lg font-semibold">Chinese Pasta</h2>
                <p className="text-gray-600">It's a testament to our.</p>
              </div>
            </div>
            <p className="text-xl font-bold text-red-500">$12.99</p>
          </div>
          <div className="flex items-center justify-between border-dotted border-2 border-gray-400 p-4 rounded-md">
            <div className="flex items-center space-x-4">
              <img src={menu1} alt="Chinese Pasta" className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h2 className="text-lg font-semibold">Chinese Pasta</h2>
                <p className="text-gray-600">It's a testament to our.</p>
              </div>
            </div>
            <p className="text-xl font-bold text-red-500 mx-2">$12.99</p>
          </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Menu;
