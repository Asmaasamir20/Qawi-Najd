import React from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Featured Article */}
        <div className='mb-12'>
          <article className='bg-white rounded-xl shadow-sm overflow-hidden'>
            <LazyLoadImage
              src='/src/assets/images/blog/featured.jpg'
              alt='مقال مميز'
              effect='blur'
              className='w-full h-[400px] object-cover'
              placeholderSrc='/src/assets/images/placeholder.png'
            />
            <div className='p-8'>
              <div className='flex items-center gap-4 mb-4'>
                <span className='px-3 py-1 bg-[#F03E2F] text-white text-sm rounded-full'>
                  مقال مميز
                </span>
                <span className='text-gray-500 text-sm'>15 مارس 2024</span>
              </div>
              <h1 className='text-3xl font-bold mb-4'>أحدث التطورات في مجال الهندسة المدنية</h1>
              <p className='text-gray-600 mb-6'>
                استكشف أحدث التطورات والتقنيات في مجال الهندسة المدنية وكيفية تطبيقها في المشاريع
                المعاصرة. نقدم لك تحليلاً شاملاً لأحدث الاتجاهات والممارسات في هذا المجال المهم.
              </p>
              <button className='text-[#F03E2F] hover:text-red-700 font-medium flex items-center gap-2'>
                اقرأ المزيد
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </article>
        </div>

        {/* Latest Articles Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Article 1 */}
          <article className='bg-white rounded-lg shadow-sm overflow-hidden'>
            <LazyLoadImage
              src='/src/assets/images/blog/article1.jpg'
              alt='مقال عن التصميم المعماري'
              effect='blur'
              className='w-full h-48 object-cover'
              placeholderSrc='/src/assets/images/placeholder.png'
            />
            <div className='p-6'>
              <div className='flex items-center gap-4 mb-3'>
                <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                  التصميم المعماري
                </span>
                <span className='text-gray-500 text-sm'>10 مارس 2024</span>
              </div>
              <h2 className='text-xl font-semibold mb-3'>مفاهيم التصميم المعماري الحديث</h2>
              <p className='text-gray-600 mb-4'>
                تعرف على أحدث المفاهيم في التصميم المعماري وكيفية تطبيقها في المشاريع المعاصرة
              </p>
              <button className='text-[#F03E2F] hover:text-red-700 font-medium'>اقرأ المزيد</button>
            </div>
          </article>

          {/* Article 2 */}
          <article className='bg-white rounded-lg shadow-sm overflow-hidden'>
            <LazyLoadImage
              src='/src/assets/images/blog/article2.jpg'
              alt='مقال عن إدارة المشاريع'
              effect='blur'
              className='w-full h-48 object-cover'
              placeholderSrc='/src/assets/images/placeholder.png'
            />
            <div className='p-6'>
              <div className='flex items-center gap-4 mb-3'>
                <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                  إدارة المشاريع
                </span>
                <span className='text-gray-500 text-sm'>5 مارس 2024</span>
              </div>
              <h2 className='text-xl font-semibold mb-3'>أفضل ممارسات إدارة المشاريع الهندسية</h2>
              <p className='text-gray-600 mb-4'>
                دليلك الشامل لإدارة المشاريع الهندسية بكفاءة وفعالية
              </p>
              <button className='text-[#F03E2F] hover:text-red-700 font-medium'>اقرأ المزيد</button>
            </div>
          </article>

          {/* Article 3 */}
          <article className='bg-white rounded-lg shadow-sm overflow-hidden'>
            <LazyLoadImage
              src='/src/assets/images/blog/article3.jpg'
              alt='مقال عن البناء المستدام'
              effect='blur'
              className='w-full h-48 object-cover'
              placeholderSrc='/src/assets/images/placeholder.png'
            />
            <div className='p-6'>
              <div className='flex items-center gap-4 mb-3'>
                <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                  البناء المستدام
                </span>
                <span className='text-gray-500 text-sm'>1 مارس 2024</span>
              </div>
              <h2 className='text-xl font-semibold mb-3'>تقنيات البناء المستدام</h2>
              <p className='text-gray-600 mb-4'>
                استكشف أحدث تقنيات البناء المستدام وكيفية تطبيقها في مشاريعك
              </p>
              <button className='text-[#F03E2F] hover:text-red-700 font-medium'>اقرأ المزيد</button>
            </div>
          </article>

          {/* Article 4 */}
          <article className='bg-white rounded-lg shadow-sm overflow-hidden'>
            <LazyLoadImage
              src='/src/assets/images/blog/article4.jpg'
              alt='مقال عن التصميم الداخلي'
              effect='blur'
              className='w-full h-48 object-cover'
              placeholderSrc='/src/assets/images/placeholder.png'
            />
            <div className='p-6'>
              <div className='flex items-center gap-4 mb-3'>
                <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                  التصميم الداخلي
                </span>
                <span className='text-gray-500 text-sm'>25 فبراير 2024</span>
              </div>
              <h2 className='text-xl font-semibold mb-3'>اتجاهات التصميم الداخلي لعام 2024</h2>
              <p className='text-gray-600 mb-4'>
                تعرف على أحدث اتجاهات التصميم الداخلي وكيفية تطبيقها في مساحاتك
              </p>
              <button className='text-[#F03E2F] hover:text-red-700 font-medium'>اقرأ المزيد</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
