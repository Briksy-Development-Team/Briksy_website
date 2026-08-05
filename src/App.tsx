import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import { testConnection } from "./api/clients.api";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./auth/AuthContext";
import ScrollToTop from "./components/utils/ScrollToTop";
import Loader from "./components/loader/Loader";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export const lenisInstance: { current: Lenis | null } = {
  current: null,
};

const V2Button = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const versions = [
    { label: "V1", path: "/" },
    { label: "V2", path: "/v2" },
    { label: "V3", path: "/v3" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="flex items-center rounded-full border border-white/20 bg-black/60 p-1.5 backdrop-blur-xl shadow-2xl">
        {versions.map((version) => {
          const active = pathname === version.path;

          return (
            <button
              key={version.path}
              onClick={() => navigate(version.path)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${active
                ? "bg-white text-black shadow-md"
                : "text-white hover:bg-white/10"
                }`}
            >
              {version.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Lives INSIDE BrowserRouter so it can read the current route
// and re-trigger the loader every time the pathname changes.
const AppContent = () => {
  const { pathname } = useLocation();
  const [appReady, setAppReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // reset the loader every time the route changes
    setShowLoader(true);
    setAppReady(false);

    const timer = setTimeout(() => {
      setAppReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {showLoader && (
        <Loader
          appReady={appReady}
          onComplete={() => {
            setShowLoader(false);
            window.dispatchEvent(new Event("hero-loader-complete"));
          }}
        />
      )}

      <ScrollToTop />
      <V2Button />
      <AppRouter />
    </>
  );
};

function App() {
  useEffect(() => {
    testConnection();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      autoRaf: false,
    });

    lenisInstance.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisInstance.current = null;
    };
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;