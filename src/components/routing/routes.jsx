import { createBrowserRouter, Navigate, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import MasterLayout from "./../../Layout/MasterLayout";

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F03E2F]"></div>
  </div>
);

// Error component
const ErrorPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
      <h1 className="text-6xl font-bold text-[#F03E2F] mb-4">404</h1>
      <p className="text-gray-700 text-xl mb-4">الصفحة غير موجودة</p>
      <Link
        to="/"
        className="inline-block mt-2 px-6 py-2 bg-[#F03E2F] text-white rounded-lg hover:bg-red-600 transition-colors">
        العودة للصفحة الرئيسية
      </Link>
    </div>
  </div>
);

// Lazy load pages for better performance
const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Services = lazy(() => import("../../pages/Services"));
const Projects = lazy(() => import("../../pages/Projects"));
const Contact = lazy(() => import("../../pages/Contact"));
const Quote = lazy(() => import("../../pages/Quote"));

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loading />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "quote",
        element: (
          <Suspense fallback={<Loading />}>
            <Quote />
          </Suspense>
        ),
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default router;
