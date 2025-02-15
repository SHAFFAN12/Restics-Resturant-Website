import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Aboutus from './pages/Aboutus.jsx';

const App = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index  element={<Home />}/>
              <Route path='about'  element={<Aboutus />}/>
              <Route path="*" element={<NoPage />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
  );
};

export default App;


{/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-16 py-8 relative bg-white"> */}
      {/* Content Section */}
      {/* <div className="col-span-1 lg:col-span-2 px-8"> */}
        {/* About Us Section */}
        {/* <div className="flex items-center gap-3 mb-4">
          <BsCloudDrizzle className="text-red-600 text-xl lg:text-3xl" />
          <span className="text-lg lg:text-xl font-bold text-red-600 tracking-wide uppercase font-oswald">
          Enjoy Our Dishes
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4 w-[700px]">
          Variety of flavours from American cuisine
        </h1>
        <p className="text-gray-700 text-base mb-6 max-w-2xl">
          Every dish is not just prepared, it's crafted with the utmost precision and a
          deep understanding of flavor harmony. The experienced hands of our chefs ensure a delightful experience.
        </p> */}

        {/* Features Section */}
        {/* <div className="flex gap-6 mb-6 flex-col lg:flex-row"> */}
          {/* Super Quality Food */}
          {/* <div className="flex items-center gap-4">
            <img src={Quality} alt="Quality" className="w-14" />
            <div>
              <h3 className="text-lg font-semibold">Super Quality Food</h3>
              <p className="text-sm text-gray-600">Served with tasty food & friendly service</p>
            </div>
          </div> */}
          
          {/* Qualified Chef */}
          {/* <div className="flex items-center gap-4">
            <img src={ChefHat} alt="Chef Hat" className="w-14" />
            <div>
              <h3 className="text-lg font-semibold">Qualified Chef</h3>
              <p className="text-sm text-gray-600">Expert chefs crafting culinary masterpieces</p>
            </div>
          </div>
        </div> */}

        {/* CEO Section */}
        {/* <div className="flex items-center gap-4">
          <img
            src={ChefHat}
            alt="Chef"
            className="w-16 border-4 rounded-full border-yellow-400"
          />
          <div>
            <p className="text-sm text-gray-600">Zbuild, CEO</p>
            <h3 className="text-lg font-semibold">Amjad Hossen</h3>
          </div>
        </div>
      </div> */}

      {/* Image Section with Overlapping Effect */}
      {/* <div className="relative w-full max-w-lg lg:h-[350px] lg:-ml-[8rem]">
        <img
          src={backgroundImage}
          alt="Discount Background"
          className="rounded-xl shadow-lg w-full h-full"
        />
        <img
          src={Pizza}
          alt="Pizza"
          className="absolute top-[75%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[500px]"
        />
      </div> */}

      {/* Mirch Image */}
      {/* <div className="absolute top-20 right-0 hidden lg:block">
        <img src={MirchImage} alt="Mirch" className="w-36" />
      </div>
    </div> */}