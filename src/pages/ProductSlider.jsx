import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Pagination, Autoplay } from "swiper/modules"; // Import autoplay module

import food1 from "../assets/food-1.png";
import food2 from "../assets/food-2.png";
import food3 from "../assets/food-3.png";
import food4 from "../assets/food-1.png";
import food5 from "../assets/food-2.png";

const ProductSlider = () => {
  const foodItems = [
    { img: food1, title: "Egg and Cucumber", price: "Rs 4,500" },
    { img: food2, title: "Chicken Fried Rice", price: "Rs 4,500" },
    { img: food3, title: "Chicken Leg Piece", price: "Rs 4,500" },
    { img: food3, title: "Chicken Leg Piece", price: "Rs 4,500" },
    { img: food4, title: "Chicken Leg Piece", price: "Rs 4,500" },
    { img: food5, title: "Chicken Leg Piece", price: "Rs 4,500" },
  ];
  return (
    <div className="w-full py-10 flex justify-center" >
      <Swiper
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // Added autoplay
        modules={[Pagination, Autoplay]} // Add Autoplay module
        breakpoints={{
          375: { slidesPerView: 1 },
          360: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-4xl overflow-visible max-w-[1200px]"
      >
        {foodItems.map((food, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white w-64 shadow-lg border border-gray-200 p-4 text-center relative transition-transform transform hover:scale-105 rounded-tr-2xl rounded-bl-2xl">
              <div className="w-28 h-28 mx-auto -mt-20 bg-white rounded-full shadow-md p-1 flex items-center justify-center">
                <img
                  src={food.img}
                  alt={food.title}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
              <h2 className="text-lg font-semibold mt-2 text-gray-800 font-dancing">{food.title}</h2>
              <p className="text-md text-gray-500 mt-2">A perfect dining experience with high-quality ingredients.</p>
              <p className="text-md font-bold text-red-600 mt-3">{food.price}</p>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition">Order Now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
