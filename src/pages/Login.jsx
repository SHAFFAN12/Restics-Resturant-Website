import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../assets/logo-dark.svg";
import image2 from "../assets/banner-vector-2.png";
import image3 from "../assets/banner-vector-3.png";
import image4 from "../assets/food-img-8.png";
import { PiSignInBold } from "react-icons/pi";


export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-400 relative overflow-hidden">
      <img src={image2} alt="background" className="absolute left-0 w-1/3 opacity-50" />
      {/* <img src={image4} alt="background" className="absolute right-0 w-1/3 opacity-50" /> */}
      <img src={image3} alt="background" className="absolute right-0 w-1/3 opacity-50" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white bg-opacity-20 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-96 text-center relative border border-white/30"
      >
        <motion.img 
          src={image} 
          alt="Auth Banner" 
          className="w-20 h-20 mx-auto rounded-full border-4 border-white shadow-lg mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">
          {isSignUp ? "Join Us" : "Welcome Back"}
        </h2>
        <p className="text-white/80 text-sm mt-2">Experience the next-gen UI</p>

        <form className="mt-6 space-y-4">
          {isSignUp && (
            <div className="flex items-center border border-white/50 bg-white/10 p-2 rounded-lg">
              <FaUser className="text-white/70 mr-2" />
              <input type="text" placeholder="Full Name" className="w-full outline-none bg-transparent text-white placeholder-white/60" />
            </div>
          )}
          <div className="flex items-center border border-white/50 bg-white/10 p-2 rounded-lg">
            <FaEnvelope className="text-white/70 mr-2" />
            <input type="email" placeholder="Email" className="w-full outline-none bg-transparent text-white placeholder-white/60" />
          </div>
          <div className="flex items-center border border-white/50 bg-white/10 p-2 rounded-lg">
            <FaLock className="text-white/70 mr-2" />
            <input type="password" placeholder="Password" className="w-full outline-none bg-transparent text-white placeholder-white/60" />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="w-full bg-red-600 text-white font-semibold border border-red-600 rounded-md px-3 py-2 text-base transition duration-300 hover:bg-white hover:border-red-600 hover:text-red-600 shadow-md group flex items-center justify-center gap-2"
          >
            <span>{isSignUp ? "Sign Up" : "Sign In"}</span>
            <span className="bg-white text-red-600 p-1 rounded-md transition duration-300 group-hover:bg-red-600 group-hover:text-white">
              <PiSignInBold />
            </span>
          </motion.button>
        </form>

        <p className="mt-6 text-white/80 text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} {" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-white font-bold hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
