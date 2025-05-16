import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceOverview from './components/Services/ServiceOverview';
import HeroSection from './HeroSection';

const Services = () => {
 

  return (
    <>
      <div className='m-4'>
        <HeroSection
          backgroundImage='../assets/images/home/2.jpeg'
          title='خدماتنا المتنوعة'
          subtitle='نقدم أفضل الخدمات المتنوعة لتلبية احتياجاتك المتنوعة'
        />
      </div>
      <ServiceOverview />
    </>
  );
};

export default Services; 