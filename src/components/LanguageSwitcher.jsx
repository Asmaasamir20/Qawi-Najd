import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-4 py-2 rounded-md transition-colors duration-200 ${
          i18n.language === 'ar' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-md transition-colors duration-200 ${
          i18n.language === 'en' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher; 