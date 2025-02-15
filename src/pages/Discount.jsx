import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/discount-img.jpg";
import Pizza from "../assets/discount-product-img.png";
import MirchImage from "../assets/discount-vector.png";
import Sticker from "../assets/discount-sticker.png";
// import Quality from "../assets/quality.png";
// import ChefHat from "../assets/chef-hat-2.png";
import { BsCloudDrizzle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const Discount = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("March 1, 2025 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-white p-4 lg:pl-[10rem] flex flex-col lg:flex-row items-center gap-8 overflow-hidden">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <BsCloudDrizzle className="text-xl font-bold text-red-500" />
          <h1 className="text-xl font-bold text-red-500">ENJOY OUR DISHES</h1>
        </div>
        <h2 className="text-2xl font-bold mb-2 w-full lg:w-80 mx-auto lg:mx-0">
          We serve and deliver delectable food.
        </h2>
        <p className="text-gray-600 mb-4 text-md">
          <span className="font-bold text-black">What Are The Restaurant's Operating Hours?</span>
          <br />
          It is a long established fact that a reader will be distracted lorem <br />
          the readable content of a page when looking
        </p>
        <h3 className="text-xl font-bold mb-2">Get Discount Every Item</h3>
        <div className="flex gap-4 mb-4 justify-center lg:justify-start">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HRS", value: timeLeft.hours },
            { label: "MINS", value: timeLeft.minutes },
            { label: "SECS", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="bg-[#EE9F1E] rounded-md p-4 text-center">
              <span className="text-2xl font-bold text-white">{item.value}</span>
              <br />
              <span className="text-white font-semibold font-mono">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-start w-full mt-4">
          <button className="flex items-center gap-2 bg-red-600 text-white font-semibold border border-red-600 rounded-md px-3 py-2 transition duration-300 hover:bg-white hover:border-red-600 hover:text-red-600 shadow-md group">
            <span>ORDER NOW</span>
            <span className="bg-white text-red-600 p-1 rounded-md transition duration-300 group-hover:bg-red-600 group-hover:text-white">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img src={backgroundImage} alt="" className="border rounded-xl shadow-lg w-full max-w-md" />
        <img src={Pizza} alt="" className="absolute bottom-0 right-12 md:right-[12rem] lg:right-[2rem] w-[50%] md:w-[60%] lg:w-[80%] max-w-[180px] md:max-w-[300px] lg:max-w-[300px]" />
        <img src={Sticker} alt="" className="absolute right-4 md:right-[10rem] top-1 lg:top-5 lg:right-0 transform -translate-x-1/2 w-[80px] lg:w-[120px]" />
      </div>
      <div className="hidden lg:block">
        <img src={MirchImage} alt="Delicious Pizza" className="object-cover w-[100px] lg:w-[150px]" />
      </div>
    </div>
  );
};

export default Discount;
