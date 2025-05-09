import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Phone, ArrowUpRight, Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoAr from '../../assets/images/logo/2.svg';
import logoEn from '../../assets/images/logo/3.svg';

const navigation = [
  { nameKey: 'navigation.home', href: '#' },
  { nameKey: 'navigation.about', href: '#' },
  { nameKey: 'navigation.services', href: '#' },
  { nameKey: 'navigation.projects', href: '#' },
  { nameKey: 'navigation.contact', href: '#' },
];

const LANGUAGES = [
  {
    code: 'ar',
    label: 'العربية',
    short: 'AR',
    flag: (
      <svg width="20" height="20" viewBox="0 0 60 40" className="rounded-full">
        <rect width="60" height="40" fill="#198754" rx="8" />
        <g>
          <text x="30" y="22" textAnchor="middle" fontSize="13" fontFamily="'Amiri', serif" fill="#fff" fontWeight="bold" style={{letterSpacing: '-1px'}}>لا إله إلا الله
محمد رسول الله</text>
          <rect x="15" y="28" width="30" height="3" rx="1.5" fill="#fff" />
          <rect x="41" y="29" width="7" height="1" rx="0.5" fill="#198754" />
        </g>
      </svg>
    ),
  },
  {
    code: 'en',
    label: 'English',
    short: 'EN',
    flag: (
      <svg width="20" height="20" viewBox="0 0 20 20" className="rounded-full"><rect width="20" height="20" fill="#00247d"/><rect y="8" width="20" height="4" fill="#fff"/><rect x="8" width="4" height="20" fill="#fff"/><rect y="9" width="20" height="2" fill="#cf142b"/><rect x="9" width="2" height="20" fill="#cf142b"/></svg>
    ),
  },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'ar');

  // Change html dir on language change
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleLangSwitch = (code) => {
    i18n.changeLanguage(code);
    setLang(code);
  };

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <Disclosure as="nav" className="bg-[#f5f9f9]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between items-center">
              {/* Logo */}
              <div className="h-full w-[150px] rounded-lg">
                <img src={lang === 'ar' ? logoAr : logoEn} alt="logo" className="h-full w-full object-cover" />
              </div>
       
              {/* Navigation */}
              <div className="hidden md:flex gap-8">
                {navigation.map((item) => (
                  <Link
                    key={item.nameKey}
                    to={item.href}
                    className="text-black font-medium hover:text-[#F03E2F] transition px-2"
                  >
                    {t(item.nameKey)}
                  </Link>
                ))}
              </div>
              {/* Actions */}
              <div className="hidden md:flex items-center gap-6">
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow text-black">
                    <Phone size={20} />
                  </span>
                  <span className="font-medium text-black text-base tracking-wide">+89(0) 1256 2156</span>
                </div>
                {/* Request a quote */}
                <Link
                  to="/quote"
                  className={`flex items-center border border-black rounded-full px-6 py-2 bg-white hover:bg-gray-50 transition group ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <span className={`font-medium text-black ${lang === 'ar' ? 'mr-4' : 'mr-4'}`}>{t('request_quote')}</span>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#F03E2F] text-white group-hover:bg-red-700 transition">
                    <ArrowUpRight size={16}  />
                  </span>
                </Link>
                {/* Language Switcher - Dropdown with Flags */}
                <div className="hidden md:block">
                  <Menu as="div" className="relative inline-block text-left">
                    {({ open }) => (
                      <>
                        <Menu.Button
                          as={motion.button}
                          whileTap={{ scale: 0.93, rotate: 2 }}
                          className={`flex items-center gap-2 px-3 py-2 rounded-full border border-black bg-white shadow-md hover:border-[#F03E2F] transition-all focus:outline-none ${open ? 'ring-2 ring-[#F03E2F]/30' : ''}`}
                          aria-expanded={open}
                        >
                          <span className="text-xl">{currentLang.flag}</span>
                          <span className="font-bold text-sm uppercase tracking-widest">{currentLang.short}</span>
                          <Globe2 size={18} className="text-[#F03E2F] ml-1" />
                          <motion.span
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="ml-1"
                          >
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="#F03E2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </motion.span>
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95 blur-sm -translate-y-2"
                          enterTo="transform opacity-100 scale-100 blur-0 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="transform opacity-100 scale-100 blur-0 translate-y-0"
                          leaveTo="transform opacity-0 scale-95 blur-sm -translate-y-2"
                        >
                          <Menu.Items as={motion.div} initial={{ opacity: 0, y: -10, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }} transition={{ duration: 0.25 }}
                            className="absolute z-10 mt-2 w-36 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none backdrop-blur-sm">
                            {LANGUAGES.filter(lng => lng.code !== lang).map((lng) => (
                              <Menu.Item key={lng.code}>
                                {({ active, close }) => (
                                  <button
                                    onClick={() => { handleLangSwitch(lng.code); close(); }}
                                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase rounded-md transition ${active ? 'bg-gray-100' : ''} text-black`}
                                  >
                                    <span className="text-xl">{lng.flag}</span>
                                    {lng.label}
                                  </button>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden bg-[#f5f9f9]">
            <div className="flex flex-col gap-2 px-4 pt-4 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.nameKey}
                  as="a"
                  href={item.href}
                  className="block text-black font-medium hover:text-[#F03E2F] px-2 py-2 rounded-md text-base"
                >
                  {t(item.nameKey)}
                </Disclosure.Button>
              ))}
              {/* Phone & Quote & Lang in mobile */}
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow text-black">
                    <Phone size={20} />
                  </span>
                  <span className="font-medium text-black text-base tracking-wide">+89(0) 1256 2156</span>
                </div>
                <Link
                  to="/quote"
                  className={`flex items-center justify-between border border-black rounded-full px-4 py-3 bg-white hover:bg-gray-50 transition group w-full text-base font-bold ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F03E2F] text-white group-hover:bg-red-700 transition">
                    <ArrowUpRight size={22} className={lang === 'ar' ? 'rotate-180' : ''} />
                  </span>
                  <span className={`text-black ${lang === 'ar' ? 'ml-2' : 'mr-2'}`}>{t('request_quote')}</span>
                </Link>
               
                   <Menu as="div" className="relative inline-block text-left">
                    {({ open }) => (
                      <>
                        <Menu.Button
                          as={motion.button}
                          whileTap={{ scale: 0.93, rotate: 2 }}
                          className={`flex items-center gap-2 px-3 py-2 rounded-full border border-black bg-white shadow-md hover:border-[#F03E2F] transition-all focus:outline-none ${open ? 'ring-2 ring-[#F03E2F]/30' : ''}`}
                          aria-expanded={open}
                        >
                          <span className="text-xl">{currentLang.flag}</span>
                          <span className="font-bold text-sm uppercase tracking-widest">{currentLang.short}</span>
                          <Globe2 size={18} className="text-[#F03E2F] ml-1" />
                          <motion.span
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="ml-1"
                          >
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="#F03E2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </motion.span>
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95 blur-sm -translate-y-2"
                          enterTo="transform opacity-100 scale-100 blur-0 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="transform opacity-100 scale-100 blur-0 translate-y-0"
                          leaveTo="transform opacity-0 scale-95 blur-sm -translate-y-2"
                        >
                          <Menu.Items as={motion.div} initial={{ opacity: 0, y: -10, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }} transition={{ duration: 0.25 }}
                            className="absolute z-10 mt-2 w-36 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none backdrop-blur-sm">
                            {LANGUAGES.filter(lng => lng.code !== lang).map((lng) => (
                              <Menu.Item key={lng.code}>
                                {({ active, close }) => (
                                  <button
                                    onClick={() => { handleLangSwitch(lng.code); close(); }}
                                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase rounded-md transition ${active ? 'bg-gray-100' : ''} text-black`}
                                  >
                                    <span className="text-xl">{lng.flag}</span>
                                    {lng.label}
                                  </button>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 