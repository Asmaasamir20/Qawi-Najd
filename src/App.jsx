import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./components/routing/routes";

// استدعاء Lazy Components بكفاءة عالية باستخدام preload
const FloatingButtonsLazy = lazy(() => import("./shared/FloatingButtons"));

// تحميل المكونات والمسارات المشتركة مسبقًا
const preloadRoutes = () => {
  // استعلامات المزاميرية للتحميل المسبق
  const mediaQuery = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  );

  // تحميل المكونات مسبقًا فقط إذا كان المستخدم لا يفضل تقليل الحركة
  if (mediaQuery.matches) {
    // نستخدم requestIdleCallback لتحميل المسارات عندما يكون المتصفح غير مشغول
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => {
        // تحميل مسبق للمسارات الأكثر استخدامًا
        import("./pages/Home");
        import("./pages/About");
        import("./pages/Services");

        // تحميل المكونات الديناميكية المشتركة
        import("./shared/FloatingButtons");
      });
    }
  }
};

function App() {
  // تنفيذ التحميل المسبق بعد تحميل الصفحة
  useEffect(() => {
    // تحميل المسارات الأساسية بعد تحميل الصفحة الأولى بنجاح
    if (document.readyState === "complete") {
      preloadRoutes();
    } else {
      window.addEventListener("load", preloadRoutes);
      return () => window.removeEventListener("load", preloadRoutes);
    }
  }, []);

  return (
    <HelmetProvider>
      {/* الميتا تاج لتحسين الأداء */}
      <Suspense fallback={null}>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        />

        {/* استخدام Suspense مع مؤشر تحميل خفي */}
        <FloatingButtonsLazy />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
