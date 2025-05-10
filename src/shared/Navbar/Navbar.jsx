import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Phone, ArrowUpRight, Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logoAr from "../../assets/images/logo/2.svg";
import logoEn from "../../assets/images/logo/3.svg";

const navigation = [
  { nameKey: "navigation.home", href: "/" },
  { nameKey: "navigation.about", href: "/about" },
  { nameKey: "navigation.services", href: "/services" },
  { nameKey: "navigation.projects", href: "/projects" },
  { nameKey: "navigation.contact", href: "/contact" },
];

const LANGUAGES = [
  {
    code: "ar",
    label: "العربية",
    short: "AR",
    flag: (
      <svg width="20" height="20" viewBox="0 0 60 40" className="rounded-full">
        <rect width="60" height="40" fill="#198754" rx="8" />
        <g>
          <text
            x="30"
            y="22"
            textAnchor="middle"
            fontSize="13"
            fontFamily="'Amiri', serif"
            fill="#fff"
            fontWeight="bold"
            style={{ letterSpacing: "-1px" }}>
            لا إله إلا الله محمد رسول الله
          </text>
          <rect x="15" y="28" width="30" height="3" rx="1.5" fill="#fff" />
          <rect x="41" y="29" width="7" height="1" rx="0.5" fill="#198754" />
        </g>
      </svg>
    ),
  },
  {
    code: "en",
    label: "English",
    short: "EN",
    flag: (
      <svg width="20" height="20" viewBox="0 0 20 20" className="rounded-full">
        <rect width="20" height="20" fill="#00247d" />
        <rect y="8" width="20" height="4" fill="#fff" />
        <rect x="8" width="4" height="20" fill="#fff" />
        <rect y="9" width="20" height="2" fill="#cf142b" />
        <rect x="9" width="2" height="20" fill="#cf142b" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "ar");

  // Change html dir on language change
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const handleLangSwitch = (code) => {
    i18n.changeLanguage(code);
    setLang(code);
  };

  return (
    <Disclosure as="nav" className="bg-[#f5f9f9]">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between items-center">
              {/* Logo */}
              <div className="relative h-16 w-[140px]">
                <img
                  src={lang === "ar" ? logoAr : logoEn}
                  alt="logo"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain"
                />
              </div>

              {/* Navigation */}
              <div className="hidden md:flex gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.nameKey}
                    to={item.href}
                    className="text-black text-sm font-medium hover:text-[#F03E2F] transition px-2">
                    {t(item.nameKey)}
                  </Link>
                ))}
              </div>
              {/* Actions */}
              <div className="hidden md:flex items-center gap-4">
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow text-black">
                    <Phone size={16} />
                  </span>
                  <span className="font-medium text-black text-sm tracking-wide">
                    +89(0) 1256 2156
                  </span>
                </div>
                {/* Request a quote */}
                <Link
                  to="/quote"
                  className={`flex items-center border border-black rounded-full px-3 py-1 bg-white hover:bg-gray-50 transition group ${
                    lang === "ar" ? "flex-row-reverse" : ""
                  }`}>
                  <span
                    className={`font-medium text-black text-sm ${
                      lang === "ar" ? "mr-2" : "mr-2"
                    }`}>
                    {t("request_quote")}
                  </span>
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F03E2F] text-white group-hover:bg-red-700 transition">
                    <ArrowUpRight size={12} />
                  </span>
                </Link>
                {/* Language Switcher - Toggle Switch */}
                <div className="hidden md:block">
                  <div className="flex items-center gap-2 bg-white p-1 rounded-full shadow-sm border border-gray-100">
                    <button
                      onClick={() => handleLangSwitch("ar")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 ${
                        lang === "ar"
                          ? "bg-[#F03E2F] text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}>
                      <span className="text-base">{LANGUAGES[0].flag}</span>
                      <span className="text-xs font-medium">العربية</span>
                    </button>
                    <button
                      onClick={() => handleLangSwitch("en")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 ${
                        lang === "en"
                          ? "bg-[#F03E2F] text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}>
                      <span className="text-base">{LANGUAGES[1].flag}</span>
                      <span className="text-xs font-medium">English</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-1.5 text-gray-700 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden bg-[#f5f9f9]">
            <div className="flex flex-col gap-1.5 px-4 pt-3 pb-2">
              {navigation.map((item) => (
                <Link
                  key={item.nameKey}
                  to={item.href}
                  className="block text-black font-medium hover:text-[#F03E2F] px-2 py-1.5 rounded-md text-sm"
                  onClick={() => open && close()}>
                  {t(item.nameKey)}
                </Link>
              ))}
              {/* Phone & Quote & Lang in mobile */}
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow text-black">
                    <Phone size={16} />
                  </span>
                  <span className="font-medium text-black text-sm tracking-wide">
                    +89(0) 1256 2156
                  </span>
                </div>
                <Link
                  to="/quote"
                  onClick={() => open && close()}
                  className={`flex items-center justify-between border border-black rounded-full px-3 py-1.5 bg-white hover:bg-gray-50 transition group w-full text-sm font-bold ${
                    lang === "ar" ? "flex-row-reverse" : ""
                  }`}>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F03E2F] text-white group-hover:bg-red-700 transition">
                    <ArrowUpRight
                      size={16}
                      className={lang === "ar" ? "rotate-180" : ""}
                    />
                  </span>
                  <span
                    className={`text-black ${lang === "ar" ? "ml-2" : "mr-2"}`}>
                    {t("request_quote")}
                  </span>
                </Link>

                {/* Language Switcher - Toggle Switch for Mobile */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="flex items-center gap-2 bg-white p-1 rounded-full shadow-sm border border-gray-100">
                    <Disclosure.Button
                      as="button"
                      onClick={() => handleLangSwitch("ar")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 ${
                        lang === "ar"
                          ? "bg-[#F03E2F] text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}>
                      <span className="text-base">{LANGUAGES[0].flag}</span>
                      <span className="text-xs font-medium">العربية</span>
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="button"
                      onClick={() => handleLangSwitch("en")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 ${
                        lang === "en"
                          ? "bg-[#F03E2F] text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}>
                      <span className="text-base">{LANGUAGES[1].flag}</span>
                      <span className="text-xs font-medium">English</span>
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
