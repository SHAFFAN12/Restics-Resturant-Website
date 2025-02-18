import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import Logo from "../assets/logo.svg";
import burgerImage from "../assets/footer-vector-1.svg";
import PizzaImage from "../assets/footer-vector-2.svg";
import FriesImage from "../assets/footer-vector-3.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#040F1C]'>
            <div className="relative">
                <img src={burgerImage} alt="burger image" className="relative top-5" />
                <img src={PizzaImage} alt="" className="absolute right-0 top-4" />
                <img src={FriesImage} alt="" className="absolute right-4 top-[15rem]" />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center px-6 md:px-10 gap-6 mb-2 pb-2'>
                {/* Logo & Social Links */}
                <div className='flex flex-col items-center md:items-start'>
                    <img src={Logo} alt="Logo" className="w-32 md:w-40" />
                    <p className='text-[#BFC0C1] mt-2 text-center md:text-left'>
                        Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis
                    </p>
                    <div className="flex space-x-3 mt-2">
                        <a href="#" className="hover:bg-blue-500 text-[#CDCFD2] border border-[#363F49] hover:border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out">
                            <FaFacebookF className="text-xs sm:text-sm md:text-base" />
                        </a>
                        <a href="#" className="hover:bg-blue-500 text-[#CDCFD2] border border-[#363F49] hover:border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out">
                            <FaTwitter className="text-xs sm:text-sm md:text-base" />
                        </a>
                        <a href="#" className="hover:bg-blue-500 text-[#CDCFD2] border border-[#363F49] hover:border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out">
                            <FaLinkedinIn className="text-xs sm:text-sm md:text-base" />
                        </a>
                        <a href="#" className="hover:bg-red-600 text-[#CDCFD2] border border-[#363F49] hover:border-red-600 rounded-lg p-2 transition duration-300 ease-in-out">
                            <FaYoutube className="text-xs sm:text-sm md:text-base" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='text-center md:text-left'>
                    <h1 className='text-2xl font-bold text-white'>Quick Links</h1>
                    <div className='flex gap-1 justify-center md:justify-start'>
                        <div className="mt-1 border-t-2 border-orange-500 w-8"></div> {/* Orange border */}
                        <div className="mt-1 border-t-2 border-red-600 w-20"></div> {/* Red border */}
                    </div>
                    <ul className='text-[#CDCFD2] mt-4 space-y-2 max-sm:place-items-start'>
                        <li className='flex items-center justify-center md:justify-start group'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <Link to="/" className='group-hover:text-red-600'>Home</Link>
                        </li>
                        <li className='flex items-center justify-center md:justify-start group'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <Link to="/" className='group-hover:text-red-600'>About us</Link>
                        </li>
                        <li className='flex items-center justify-center md:justify-start group'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <Link to="/" className='group-hover:text-red-600'>Our Services</Link>
                        </li>
                        <li className='flex items-center justify-center md:justify-start group'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <Link to="/" className='group-hover:text-red-600'>Contact us</Link>
                        </li>
                    </ul>
                </div>

                {/* Our Menu */}
                <div className='text-center md:text-left'>
                    <h1 className='text-2xl font-bold text-white'>Our Menu</h1>
                    <div className='flex gap-1 justify-center md:justify-start'>
                        <div className="mt-1 border-t-2 border-orange-500 w-8"></div> {/* Orange border */}
                        <div className="mt-1 border-t-2 border-red-600 w-20"></div> {/* Red border */}
                    </div>
                    <ul className='text-[#CDCFD2] mt-4 space-y-2 max-sm:place-items-start'>
                        <li className='flex items-center justify-center md:justify-start group cursor-pointer'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <p className='group-hover:text-red-600'>Burgers</p>
                        </li>
                        <li className='flex items-center justify-center md:justify-start group cursor-pointer'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <p className='group-hover:text-red-600'>Pizza</p>
                        </li>
                        <li className='flex items-center justify-center md:justify-start group cursor-pointer'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <p className='group-hover:text-red-600'>Fresh Food</p>
                        </li>
                        <li className='flex items-center justify-center md:justify-start group cursor-pointer'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <p className='group-hover:text-red-600'>Desserts</p>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className='text-center md:text-left md:ml-6'>
                    <h1 className='text-2xl font-bold text-white'>Newsletter</h1>
                    <div className='flex gap-1 justify-center md:justify-start'>
                        <div className="mt-1 border-t-2 border-orange-500 w-8"></div> {/* Orange border */}
                        <div className="mt-1 border-t-2 border-red-600 w-20"></div> {/* Red border */}
                    </div>
                    <ul className='text-[#CDCFD2] mt-4 space-y-2 max-sm:place-items-start'>
                        <li className='flex items-center justify-center md:justify-start group cursor-pointer'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <p className='group-hover:text-red-600 max-sm:text-xs'>Monday – Friday : 8am – 4pm</p>
                        </li>
                        <li className='flex items-center justify-center md:justify-start group cursor-pointer'>
                            <MdKeyboardDoubleArrowRight className='text-[#CDCFD2] text-lg group-hover:text-red-600' />
                            <p className='group-hover:text-red-600 max-sm:text-xs'>Saturday : 8am – 12am</p>
                        </li>
                    </ul>
                    <div>
                        <button className='bg-[#fff] flex items-center px-2 py-1 rounded-md mt-2'>
                            <input
                                type="email"
                                placeholder="Your Email address"
                                className="bg-[#fff] text-gray-700 px-2 py-1 mr-2 focus:outline-none w-48 max-sm:w-32" // Adjusted width and padding
                            />
                            <FaArrowRight className="text-4xl text-white bg-orange-500 p-3 rounded-md z-10" /> {/* Larger icon */}
                        </button>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <input
                            type="checkbox"
                            id="privacy-policy"
                            className='border-[1px] border-[#CDCFD2] rounded-md focus:outline-none checked:bg-orange-500 checked:border-orange-500 '
                        />
                        <p className='text-[#BFC0C1] max-sm:text-xs'>
                            I agree with the <span className="text-[#CDCFD2] font-bold underline cursor-pointer">Privacy Policy</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-around bg-red-600 text-white p-2">
                <div className='max-sm:text-xs'>
                © 2025 Restics. All rights reserved
                </div>
                <div className='flex gap-4'>
                    <p className='max-sm:text-xs'>Terms & Conditions</p>
                    <p className='max-sm:text-xs'>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
