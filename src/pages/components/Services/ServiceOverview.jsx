import React from 'react';
import { FiHome, FiTool, FiLayers, FiClipboard } from 'react-icons/fi';

const services = [
  {
    title: 'Sustainable building',
    desc: 'Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutt.',
    icon: <FiHome className='w-8 h-8' />,
    active: false,
  },
  {
    title: 'Renovation & Remodeling',
    desc: 'Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutt.',
    icon: <FiTool className='w-8 h-8' />,
    active: true,
  },
  {
    title: 'Custom Construction',
    desc: 'Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutt.',
    icon: <FiLayers className='w-8 h-8' />,
    active: false,
  },
  {
    title: 'Project Management',
    desc: 'Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutt.',
    icon: <FiClipboard className='w-8 h-8' />,
    active: false,
  },
  {
    title: 'Renovation & Remodeling',
    desc: 'Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutt.',
    icon: <FiTool className='w-8 h-8' />,
    active: false,
  },
  {
    title: 'Custom Construction',
    desc: 'Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutt.',
    icon: <FiLayers className='w-8 h-8' />,
    active: false,
  },
];

const ServiceOverview = () => {
  return (
    <div className='min-h-screen bg-[#EFF3F6] flex items-center justify-center py-6 px-2'>
      <div className='bg-white rounded-3xl p-6 md:p-10 max-w-6xl w-full shadow-sm border border-[#e9ecef]'>
        <div className='text-center mb-10'>
          <div className='text-xs text-[#e76f51] font-semibold mb-3 inline-block border border-[#e76f51] rounded-full px-4 py-1 tracking-wider'>
            OUR SERVICE
          </div>
          <h2 className='font-black text-3xl md:text-4xl mb-0 mt-0'>What we offer for you</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col h-full rounded-2xl p-7 transition-all duration-500 border cursor-pointer ${service.active ? 'bg-[#f76f51] text-white border-none' : 'bg-[#f6f9fa] text-[#222] border-[#e9ecef]'} shadow-sm hover:shadow-lg hover:scale-105`}
            >
              <div
                className={`mb-4 flex items-center justify-center transition-all duration-500 ${service.active ? 'text-white' : 'text-[#222]'} group-hover:-translate-y-1 group-hover:rotate-6`}
              >
                {service.icon}
              </div>
              <div className='font-bold text-lg mb-2 text-center'>{service.title}</div>
              <hr
                className={`my-2 border-t ${service.active ? 'border-white/30' : 'border-[#e9ecef]'}`}
              />
              <div
                className={`text-sm mb-8 text-center ${service.active ? 'text-white/90' : 'text-gray-500'}`}
              >
                {service.desc}
              </div>
              <button
                className={`absolute right-5 bottom-5 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md transition-all duration-500
                  ${
                    service.active
                      ? 'bg-white text-[#f76f51] group-hover:bg-[#fff3ed] group-hover:text-[#e76f51]'
                      : 'bg-[#222] text-white group-hover:bg-[#e76f51] group-hover:text-white'
                  }
                  group-hover:-translate-y-1
                `}
              >
                <span className='inline-block -rotate-45 transition-all duration-500 group-hover:scale-125'>
                  ➔
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
