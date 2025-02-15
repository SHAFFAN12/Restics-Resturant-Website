import React from 'react';
import foodBackground from '../assets/foods-bg.jpg';
import tray from "../assets/tray.png";
import ProductSlider from './ProductSlider.jsx';

const PopularFoods = () => {
    return (
        <div className="relative bg-cover bg-center pb-10 overflow-hidden" style={{ backgroundImage: `url(${foodBackground})` }}>
            {/* Red Overlay with Opacity */}
            <div className="absolute inset-0 bg-[#FEF9F4] opacity-95"></div>

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center gap-4 py-10">
                {/* Icon and Title */}
                <div className="flex items-center gap-2">
                    <img src={tray} alt='' className='w-10' />
                    <span className="text-lg lg:text-xl font-bold text-red-600 tracking-wide uppercase font-oswald">Best Food</span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl lg:text-3xl font-bold max-w-2xl font-oswald">
                    Popular Food Items
                </h1>
            </div>

            <div>
                <ProductSlider />
            </div>

        </div>
    );
};

export default PopularFoods;



