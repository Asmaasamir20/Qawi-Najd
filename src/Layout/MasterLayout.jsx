import React from "react";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/routing/ScrollToTop";

const MasterLayout = () => {
  return (
    <div className="flex flex-col text-black  min-h-screen">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-main">
        تخطي إلى المحتوى الرئيسي
      </a>

      <header role="banner">
        <Navbar />
      </header>

      <main id="main-content" className="flex-grow p-4" role="main">
        <Outlet />
      </main>

      <footer role="contentinfo ">
        <Footer />
      </footer>
    </div>
  );
};

export default MasterLayout;
