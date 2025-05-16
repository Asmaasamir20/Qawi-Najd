import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from './HeroSection';
import ProductsOverview from './components/Products/ProductsOverview';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='m-4'>
        <HeroSection
          backgroundImage='/src/assets/images/home/3.jpeg'
          title='معرض أعمالنا'
          subtitle='نفخر بتقديم مجموعة من مشاريعنا المميزة في مجال المساحة و الاستشارات الهندسية'
        />
      </div>
      <ProductsOverview/>
    </>
  );
};

export default Projects;
