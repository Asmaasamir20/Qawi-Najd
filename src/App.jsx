import "./App.css";
import { lazy, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./components/routing/routes";

// استدعاء Lazy Components
const FloatingButtonsLazy = lazy(() => import("./shared/FloatingButtons"));

function App() {
  return (
    <HelmetProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      />

      {/* استخدام Suspense لتجنب أخطاء التحميل البطيء */}
      <Suspense fallback={<div>Loading...</div>}>
        <FloatingButtonsLazy />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
