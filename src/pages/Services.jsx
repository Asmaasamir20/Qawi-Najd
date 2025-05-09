import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1>{t('navigation.services')}</h1>
    </div>
  );
};

export default Services; 