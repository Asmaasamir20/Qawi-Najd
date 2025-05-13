import React from 'react';
import HomeCover from './components/home/HomeCover';
import AboutOverview from './components/about/AboutOverview';
import ServiceOverview from './components/Services/ServiceOverview';
const Home = () => {
  return (
    <>
      <HomeCover />
      <AboutOverview />
      <ServiceOverview />
    </>
  );
};

export default Home; 