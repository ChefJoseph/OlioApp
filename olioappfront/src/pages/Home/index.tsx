import React from 'react';
// import { useNavigate } from 'react-router-dom';
import LandingSlider from './LandingSlider';
// import AuthContext from '../../AuthProvider';

import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';
import FeaturedProduct from './FeaturedProduct';
import LearnOliveOil from './LearnOliveOil';



function HomePage() {
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  
  return (
    <div className="">
      <NavBar />
      <LandingSlider/>
      <FeaturedProduct/>
      <LearnOliveOil/>
      <Footer />
    </div>
  );
}

export default HomePage;
