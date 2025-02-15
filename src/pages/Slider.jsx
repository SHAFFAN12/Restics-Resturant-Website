import React from "react";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../assets/banner-img-1.png";
import image2 from "../assets/food-img-5.png";
import image3 from "../assets/food-img-2.png";
import image4 from "../assets/banner-vector-1.png";
import image5 from "../assets/banner-vector-2.png";
import image6 from "../assets/banner-vector-3.png";
import image7 from "../assets/banner-txt-img.jpg";
import "../index.css";

const Slider = () => {
  return (
    <div className="home relative bg-[#FAE9C8] overflow-hidden">
      {/* Background Images positioned behind content */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img src={image4} alt="" className="absolute top-0 left-0 w-20 md:w-40" />
        <img src={image5} alt="" className="absolute bottom-0 left-0 w-20 md:w-40" />
        <img src={image6} alt="" className="absolute lg:top-[-4rem] max-lg:-top-10 right-0 w-20 md:w-40" />
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        className="container relative z-10"
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-6">
            {/* Text Section */}
            <div className="text-center md:text-left max-w-lg max-sm:mt-2">
              <h3 className="text-xl md:text-2xl font-dancing text-red-600">Good Food, Good Mood</h3>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-3 mt-2">
                <h1 className="text-4xl md:text-6xl font-bold text-[#2B2D30] font-oswald">Premium</h1>
                <img src={image7} alt="" className="w-32 lg:w-40 md:w-24 rounded-xl object-cover lg:mx-2 lg:mt-3" />
                <h1 className="text-4xl md:text-6xl font-bold text-[#2B2D30] font-oswald">Restaurants/Cafes</h1>
              </div>
              <p className="mt-2 text-black text-sm md:text-base">
                Good food starts with good ingredients. We only bring you the best.
              </p>
              <div className="flex max-sm:justify-center w-full mt-4">
                <button className="flex items-center gap-2 bg-red-600 text-white font-semibold border border-red-600 rounded-md px-3 py-2 transition duration-300 hover:bg-white hover:border-red-600 hover:text-red-600 shadow-md group">
                  <span>ORDER NOW</span>
                  <span className="bg-white text-red-600 p-1 rounded-md transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full lg:mr-8 lg:-mt-8 max-sm:w-64 max-sm:-mt-4  max-w-xs mx-auto md:w-80 lg:w-96">
              <img src={image1} alt="Food" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-6">
            {/* Text Section */}
            <div className="text-center md:text-left max-w-lg max-sm:mt-2">
              <h3 className="text-xl md:text-2xl font-dancing text-red-600">Good Food, Good Mood</h3>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-3 mt-2">
                <h1 className="text-4xl md:text-6xl font-bold text-[#2B2D30] font-oswald">Premium</h1>
                <img src={image7} alt="" className="w-32 lg:w-40 md:w-24 rounded-xl object-cover lg:mx-2 lg:mt-3" />
                <h1 className="text-4xl md:text-6xl font-bold text-[#2B2D30] font-oswald">Restaurants/Cafes</h1>
              </div>
              <p className="mt-2 text-black text-sm md:text-base">
                Good food starts with good ingredients. We only bring you the best.
              </p>
              <div className="flex max-sm:justify-center w-full mt-4">
                <button className="flex items-center gap-2 bg-red-600 text-white font-semibold border border-red-600 rounded-md px-3 py-2 transition duration-300 hover:bg-white hover:border-red-600 hover:text-red-600 shadow-md group">
                  <span>ORDER NOW</span>
                  <span className="bg-white text-red-600 p-1 rounded-md transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full max-w-xs max-sm:w-64 max-sm:-mt-4 mx-auto md:w-80 lg:w-96 lg:mr-8 lg:-mt-8">
              <img src={image2} alt="Food" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-6">
            {/* Text Section */}
            <div className="text-center md:text-left max-w-lg max-sm:mt-2">
              <h3 className="text-xl md:text-2xl font-dancing text-red-600 max-sm:mt-4">Good Food, Good Mood</h3>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-3 mt-2">
                <h1 className="text-4xl md:text-6xl font-bold text-[#2B2D30] font-oswald">Premium</h1>
                <img src={image7} alt="" className="w-32 lg:w-40 md:w-24 rounded-xl object-cover lg:mx-2 lg:mt-3" />
                <h1 className="text-4xl md:text-6xl font-bold text-[#2B2D30] font-oswald">Restaurants/Cafes</h1>
              </div>
              <p className="mt-2 text-black text-sm md:text-base">
                Good food starts with good ingredients. We only bring you the best.
              </p>
              <div className="flex max-sm:justify-center w-full mt-4">
                <button className="flex items-center gap-2 bg-red-600 text-white font-semibold border border-red-600 rounded-md px-3 py-2 transition duration-300 hover:bg-white hover:border-red-600 hover:text-red-600 shadow-md group">
                  <span>ORDER NOW</span>
                  <span className="bg-white text-red-600 p-1 rounded-md transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full max-w-xs max-sm:w-64 max-sm:-mt-4 mx-auto md:w-80 lg:w-96 lg:mr-16 lg:-mt-8">
              <img src={image3} alt="Food" className="w-full h-auto object-cover rounded-lg " />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-next text-black text-2xl md:text-3xl">
        <FaAngleRight />
      </div>
      <div className="swiper-button-prev text-black text-2xl md:text-3xl">
        <FaAngleLeft />
      </div>
    </div>
  );
};

export default Slider;
