import React from 'react';
import HomeCover from './components/home/HomeCover';
import AboutOverview from './components/about/AboutOverview';
import ServiceOverview from './components/Services/ServiceOverview';
import ProductsOverview from './components/Products/ProductsOverview';
const Home = () => {
  return (
    <>
      <HomeCover />
      <AboutOverview />
      <ServiceOverview />
      <ProductsOverview/>
    </>
  );
};

export default Home; 