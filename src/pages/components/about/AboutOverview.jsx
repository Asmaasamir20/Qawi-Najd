import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaBuilding,
  FaIndustry,
  FaHome,
  FaBriefcase,
  FaRegFileAlt,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';
import { GiDemolish } from 'react-icons/gi';
import { MdHomeRepairService } from 'react-icons/md';
import { TbArrowsDiagonal2 } from 'react-icons/tb';

const AboutOverview = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Features/services
  const features = [
    {
      icon: <FaBuilding className='text-[#f03e2f] text-2xl' />,
      title: t('about.features.design'),
      desc: t('about.features.design_desc'),
    },
    {
      icon: <TbArrowsDiagonal2 className='text-[#f03e2f] text-2xl' />,
      title: t('about.features.survey'),
      desc: t('about.features.survey_desc'),
    },
    {
      icon: <MdHomeRepairService className='text-[#f03e2f] text-2xl' />,
      title: t('about.features.project'),
      desc: t('about.features.project_desc'),
    },
    {
      icon: <FaRegFileAlt className='text-[#f03e2f] text-2xl' />,
      title: t('about.features.license'),
      desc: t('about.features.license_desc'),
    },
  ];

  // Licenses
  const licenses = [
    {
      icon: <FaBuilding className='text-[#f03e2f]' />,
      text: t('about.licenses.building'),
    },
    {
      icon: <GiDemolish className='text-[#f03e2f]' />,
      text: t('about.licenses.demolish'),
    },
    {
      icon: <MdHomeRepairService className='text-[#f03e2f]' />,
      text: t('about.licenses.renovation'),
    },
    {
      icon: <TbArrowsDiagonal2 className='text-[#f03e2f]' />,
      text: t('about.licenses.expansion'),
    },
    {
      icon: <FaRegFileAlt className='text-[#f03e2f]' />,
      text: t('about.licenses.all'),
    },
  ];

  // Categories
  const categories = [
    {
      icon: <FaBuilding className='text-[#f03e2f] text-lg' />,
      label: t('about.categories.commercial'),
    },
    {
      icon: <FaIndustry className='text-gray-400 text-lg' />,
      label: t('about.categories.industrial'),
    },
    {
      icon: <FaHome className='text-gray-400 text-lg' />,
      label: t('about.categories.residential'),
    },
    {
      icon: <FaBriefcase className='text-gray-400 text-lg' />,
      label: t('about.categories.corporate'),
    },
  ];

  return (
    <div
      className='bg-[#f7fafd] min-h-[100vh] py-12 px-2 md:px-10 w-full'
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* القسم الرئيسي */}
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* يسار: صورة/مربع كبير مع إحصائية */}
          <div className='flex flex-col gap-6 items-center'>
            <div className='bg-white rounded-2xl w-full max-w-[500px] p-8 shadow-sm border border-gray-100'>
              <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block bg-[#fff0ed] text-[#f03e2f] px-4 py-1 rounded-full text-xs font-bold'>
                    {t('about.badge')}
                  </span>
                </div>
                <h2 className='text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug'>
                  {t('about.title')}
                </h2>
                <p className='text-gray-600 text-base leading-relaxed'>{t('about.description')}</p>
                <div className='bg-[#f8f9fa] rounded-xl p-6'>
                  <h3 className='text-lg font-bold text-gray-800 mb-4'>{t('about.services')}</h3>
                  <ul className='space-y-3'>
                    {features.map((feature, index) => (
                      <li key={index} className='flex items-start gap-3'>
                        <span className='text-[#f03e2f] mt-1'>
                          <FaCheckCircle />
                        </span>
                        <span className='text-gray-700'>{feature.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* يمين: التراخيص والخدمات */}
          <div className='flex flex-col gap-6'>
            <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100'>
              <h3 className='text-xl font-bold text-gray-800 mb-6'>{t('about.licensesTitle')}</h3>
              <div className='space-y-6'>
                <p className='text-gray-600 text-base leading-relaxed'>
                  {t('about.licensesDescription')}
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {licenses.map((license, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-xl'
                    >
                      <div className='text-[#f03e2f]'>{license.icon}</div>
                      <span className='text-gray-700 font-medium'>{license.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* قسم الإحصائيات */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              <div className='bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100'>
                <div className='text-3xl font-bold text-[#f03e2f] mb-2'>100%</div>
                <div className='text-sm text-gray-600'>{t('about.satisfaction')}</div>
              </div>
              <div className='bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100'>
                <div className='text-3xl font-bold text-[#f03e2f] mb-2'>15+</div>
                <div className='text-sm text-gray-600'>{t('about.experience')}</div>
              </div>
              <div className='bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100'>
                <div className='text-3xl font-bold text-[#f03e2f] mb-2'>500+</div>
                <div className='text-sm text-gray-600'>{t('about.projects')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم التصنيفات */}
        <div className='mt-12'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {categories.map((cat, i) => (
              <div
                key={i}
                className='bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:border-[#f03e2f] transition-colors'
              >
                <div className='text-2xl mb-3'>{cat.icon}</div>
                <div className='font-semibold text-gray-800'>{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;
