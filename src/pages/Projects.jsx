import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1>{t('navigation.projects')}</h1>
    </div>
  );
};

export default Projects; 