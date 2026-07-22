import "./App.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { testConnection } from "./api/clients.api";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./auth/AuthContext";
import ScrollToTop from "./components/utils/ScrollToTop";
// import Loader from "./components/loader/Loader";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export const lenisInstance: { current: Lenis | null } = { current: null };

function App() {
  useEffect(() => { testConnection(); }, []);
  // const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, autoRaf: false });
    lenisInstance.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      lenisInstance.current = null;
    };
  }, []);


  return (
    <>
      {/* {!loaded && <Loader onComplete={() => setLoaded(true)} />} */}

      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;