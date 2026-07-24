import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
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

// Small wrapper so we can use useNavigate inside BrowserRouter
const V2Button = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/v2")}
      className="fixed bottom-6 right-6 z-50 px-5 py-2.5 rounded-full bg-[#342511] text-white text-sm font-medium shadow-lg hover:opacity-90 transition-opacity"
    >
      Go to V2
    </button>
  );
};

function App() {
  const [appReady, setAppReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

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

    setTimeout(() => {
      setAppReady(true);
    }, 3000);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisInstance.current = null;
    };
  }, []);

  return (
    <>
      {showLoader && (
        <Loader
          appReady={appReady}
          onComplete={() => setShowLoader(false)}
        />
      )}

      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <V2Button />
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;