import React from 'react';
import { useTranslation } from 'react-i18next';

const Quote = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1>{t('request_quote')}</h1>
    </div>
  );
};

export default Quote; 