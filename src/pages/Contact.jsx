import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactUsSection from './components/ContactUs/ContactUsCards';
import { ContactForm } from './components/ContactUs';
import Location from './components/ContactUs/Location';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContactUsSection />

      <div className='min-h-screen bg-[#f8f9fa] py-12'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold mb-2'>{t('navigation.contact')}</h1>
            <div className='w-16 h-1 bg-[#ff3e33] mx-auto'></div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
              <ContactForm />
            </div>
            <div>
              <div className=' p-12 rounded-3xl shadow-sm h-full relative overflow-hidden'>
                <div className='mb-4'>
                  <span className='inline-block px-4 py-1 text-xs font-medium text-[#ff3e33] bg-white rounded-full'>
                    ABOUT US
                  </span>
                </div>

                <h2 className='text-4xl font-bold mb-4 text-gray-900'>
                  Happy to Answer All Your Questions
                </h2>

                <p className='text-gray-600 mb-8'>
                  Spanish mackerel yellow weaver surgill. Sandperch flyingfish.
                </p>

                <div className='h-64 w-full bg-gray-300 rounded-2xl shadow-md mt-16'>
                  {/* Placeholder for image */}
                </div>

                <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full'></div>
                <div className='absolute -bottom-16 -right-16 w-40 h-40 bg-white opacity-5 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location />
    </>
  );
};

export default Contact;
