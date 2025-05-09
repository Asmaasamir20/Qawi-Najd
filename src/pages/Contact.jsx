import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1>{t('navigation.contact')}</h1>
    </div>
  );
};

export default Contact; 