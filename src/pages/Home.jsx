import React from 'react';
import Slider from "./Slider.jsx"
import Aboutus from './Aboutus.jsx';
import PopularFoods from './PopularFoods.jsx';
import Discount from './Discount.jsx';
import Menu from './Menu.jsx';
const Home = () => {
  return (
    <div>
      <Slider/>

      <div>
        <Aboutus/>
      </div>
      <div>
        <PopularFoods/>
      </div>

      <div>
        <Discount/>
      </div>
      <div>
        <Menu/>
      </div>

    </div>
  );
};

export default Home;
