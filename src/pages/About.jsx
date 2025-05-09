import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1>{t('navigation.about')}</h1>
    </div>
  );
};

export default About; 