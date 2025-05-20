import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const ContactUsSection = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const contactItems = [
    {
      icon: <FaEnvelope size={18} className='text-red-500' />,
      iconBg: 'bg-[#EFF3F6]',
      title: isRTL ? 'راسلنا 24/7' : 'Mail Us 24/7',
      text: 'Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutt.',
    },
    {
      icon: <MdLocationOn size={18} className='text-red-500' />,
      iconBg: 'bg-[#EFF3F6]',
      title: isRTL ? 'موقعنا' : 'Our Location',
      text: 'Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutt.',
    },
    {
      icon: <FaPhone size={18} className='text-red-500' />,
      iconBg: 'bg-[#EFF3F6]',
      title: isRTL ? 'اتصل بنا 24/7' : 'Call US 24/7',
      text: '+966 54 824 0556',
    },
    {
      icon: <FaCalendarAlt size={18} className='text-red-500' />,
      iconBg: 'bg-[#EFF3F6]',
      title: isRTL ? 'أيام العمل' : 'Working Days',
      text: 'Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutt.',
    },
  ];

  return (
    <div className='w-full py-6 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {contactItems.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-sm overflow-hidden relative group'
            >
              <div className='p-6'>
                <div className='flex items-center'>
                  <div
                    className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center shadow-sm`}
                  >
                    {item.icon}
                  </div>
                  <h3 className='ml-3.5 text-base font-medium mx-3 text-gray-800'>{item.title}</h3>
                </div>
                <div className='w-full h-px bg-gray-200 my-4'></div>
                <p className='text-gray-500 text-sm leading-relaxed pb-5'>{item.text}</p>
                <div className=' my-6'>
                  {' '}
                  <button
                    className={`
                  absolute bottom-5 ltr:right-5 rtl:left-5 w-10 h-10  rounded-full flex items-center justify-center text-xl shadow-md
                  transition-all duration-500
                  ${
                    index === 1
                      ? 'bg-[#e7401c] text-white'
                      : 'bg-[#222] text-white group-hover:bg-[#e7401c] group-hover:text-white'
                  }
                `}
                  >
                    <span
                      className={`inline-block transition-all duration-500
                    ${index === 1 ? '-rotate-45 group-hover:rotate-0' : ' -rotate-45 group-hover:rotate-0'}`}
                    >
                      ➔
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
