import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1>{t('welcome')}</h1>
    </div>
  );
};

export default Home; 