import React from "react";
import image1 from "../assets/about-vector-1.png";
import backgroundCard from "../assets/about-img-1.jpg";
import Chef from "../assets/about-img-2.jpg";
import image4 from "../assets/about-vector-2.png";
import Quality from "../assets/quality.png";
import ChefHat from "../assets/chef-hat-2.png";
import "../index.css";
import { BsCloudDrizzle } from "react-icons/bs";

const Aboutus = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-8 relative bg-white max-sm:grid-cols-1 max-lg:grid-cols-2 overflow-hidden">
      {/* First Image (Left Shifted) */}
      <div className="flex items-center ml-[-30px] max-lg:hidden max-sm:hidden aboutMirchIamge">
        <img src={image1} alt="vector 1" className="w-40" />
      </div>

      {/* Overlapping Image Effect */}
      <div className="relative w-fit lg:space-x-[-8rem] md:space-x-4 max-sm:space-x-4 aboutChefImage">
        {/* Background Shadow */}
        <div className="absolute top-4 left-4 bg-red-900 rounded-xl w-full h-full -z-10"></div>

        {/* Main Image */}
        <img
          src={backgroundCard}
          alt="about 1"
          className="rounded-xl shadow-lg relative lg:w-96 lg:h-80 w-64 h-64"
        />

        {/* Overlapping Image - Centered */}
        <img
          src={Chef}
          alt="about 2"
          className="absolute top-[54%] left-2/3 max-lg:top-[38%] max-sm:top-[60%] transform -translate-x-1/2 -translate-y-1/2 lg:w-96 lg:h-80 w-64 h-64 rounded-xl shadow-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="col-span-2 md:-mx-[4rem] lg:ml-[-8rem] md:mt-4 md:col-span-1 max-sm:mt-6">
        {/* Icon and "About" in One Line */}
        <div className="flex items-center gap-3">
          <BsCloudDrizzle className="text-red-600 text-xl lg:text-2xl" />
          <span className="text-lg lg:text-xl font-bold text-red-600 tracking-wide uppercase font-oswald">About Us</span>
        </div>

        {/* Heading and Paragraph in a Contained Section */}
        <div className="max-w-2xl md:w-96">
          <h1 className="text-2xl lg:text-3xl font-bold lg:whitespace-nowrap">
            Variety of flavours from American cuisine
          </h1>

          <p className="text-gray-700 md:max-w-full max-sm:w-[18rem] lg:whitespace-nowrap">
            Every dish is not just prepared it's crafted with the utmost precision and a 
            deep understanding <br className="hidden lg:block"/> of flavor harmony. The experienced hands of our chefs ensure a delightful experience.
          </p>
          <hr className="mt-4 md:w-96 lg:w-[600px] max-sm:w-64" />
          
          <div className="flex mt-2 flex-col md:flex-row gap-4 max-lg:gap-0 aboutTable md:w-96 md:gap-2 lg:w-[600px]">
            {/* First Section */}
            <div className="flex items-center gap-4">
              <img src={Quality} alt="quality" className="w-10 max-lg:w-12" />
              <div>
                <h1 className="text-lg font-semibold max-lg:text-xs lg:whitespace-nowrap">Super Quality Food</h1>
                <p className="text-gray-600 text-xs mt-1">Served our tasty food & good food by friendly</p>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="border-l-2  lg:mx-4 hidden md:block"></div>
            <hr className="hidden max-sm:block mt-2 max-sm:w-64"/>
            {/* Second Section */}
            <div className="flex items-center gap-4">
              <img src={ChefHat} alt="ChefHat" className="w-10 max-lg:w-12" />
              <div>
                <h1 className="text-lg font-semibold max-lg:text-xs">Qualified Chef</h1>
                <p className="text-gray-600 text-xs mt-1">Served our tasty food & good food by friendly</p>
              </div>
            </div>
          </div>

          <hr className="mt-4 md:w-96 lg:w-[600px] max-sm:w-64" />

          <div className="flex items-center gap-4 mt-3">
            <img src={Chef} alt="ChefHat" className="w-16 border-4 rounded-full border-yellow-400" />
            <div>
              <p className="text-gray-600 text-xs mt-1">Zbuild, CEO</p>
              <h1 className="text-lg font-semibold">Amjad Hossen</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Move Image 4 to the Right Corner */}
      <div className="absolute bottom-0 right-0  max-lg:hidden aboutPlateImage">
        <img src={image4} alt="vector 2" className="w-40" />
      </div>
    </div>
  );
};

export default Aboutus;
