import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactUsSection from './components/ContactUs/ContactUsCards';
import { ContactForm } from './components/ContactUs';

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
            <div className='col-span-1 lg:col-span-2 mt-8'>
              <div className='w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-md relative'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14752.346553348032!2d46.690929!3d24.713552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1630005558143!5m2!1sen!2ssa'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  title='Google Maps'
                ></iframe>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                  <div className='text-[#ff3e33]'>
                    <svg
                      width='40'
                      height='40'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
