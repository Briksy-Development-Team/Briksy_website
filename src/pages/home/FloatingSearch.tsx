import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SearchBar from "./SearchBar";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  heroAnchorRef: React.RefObject<HTMLDivElement | null>;
  navAnchorRef: React.RefObject<HTMLDivElement | null>;
  expandedAnchorRef: React.RefObject<HTMLDivElement | null>;
  tabsRef: React.RefObject<HTMLDivElement | null>;
  mode: "collapsed" | "search" | "ai";
  setMode: (mode: "collapsed" | "search" | "ai") => void;
};
const FloatingSearch = ({
  heroAnchorRef,
  navAnchorRef,
  expandedAnchorRef,
  tabsRef,
  mode,
  setMode,
}: Props) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const modeRef = useRef(mode);

  modeRef.current = mode;

  useGSAP(() => {
    if (!heroAnchorRef.current || !navAnchorRef.current || !searchRef.current)
      return;

    const search = searchRef.current;

    const setup = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const hR = heroAnchorRef.current!.getBoundingClientRect();
      const nR = navAnchorRef.current!.getBoundingClientRect();
      const scrollY = window.scrollY;

      const startX = hR.left + hR.width / 2;
      const startY = hR.top + scrollY + hR.height / 2;

      const endX = nR.left + nR.width / 2;
      const endY = nR.top + nR.height / 2;

      const startW = Math.min(hR.width, window.innerWidth - 64);
      const endW = nR.width;

      const searchOffset = -180;
      const tabsOffset = 180;

      gsap.set(search, {
        position: "fixed",
        top: 0,
        left: 0,
        x: startX,
        y: hR.top + hR.height / 2,
        xPercent: -50,
        yPercent: -50,
        width: startW,

      });

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "+=450",
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          progressRef.current = self.progress;
          if (modeRef.current === "search" && self.progress < 0.98) {
            setMode("collapsed");
          }

          if (modeRef.current === "search") return;

          const p = self.progress;
          const shrinkProgress = Math.min(1, p * 2.5);

          if (tabsRef.current) {
            gsap.to(tabsRef.current, {
              x: gsap.utils.interpolate(0, tabsOffset, p),
              duration: 0.3,
              overwrite: "auto",

            });
          }
          const filters = search.querySelector(".search-filters");
          if (filters) {
            gsap.to(filters, {
              opacity: gsap.utils.interpolate(1, 0, shrinkProgress),
              height: gsap.utils.interpolate(36, 0, shrinkProgress),
              marginTop: gsap.utils.interpolate(10, 0, shrinkProgress),
              overflow: "hidden",
              duration: 0.3,
              overwrite: "auto",
              pointerEvents: p > 0.05 ? "none" : "auto",
            });
          }
          const labels = search.querySelectorAll(".search-label");
          labels.forEach((label) => {
            gsap.to(label, {
              opacity: gsap.utils.interpolate(1, 0, shrinkProgress),
              height: gsap.utils.interpolate(16, 0, shrinkProgress),
              marginBottom: gsap.utils.interpolate(4, 0, shrinkProgress),
              overflow: "hidden",
              duration: 0.3,
              overwrite: "auto",
            });
          });
          const type = search.querySelector(".search-type");
          if (type) {
            gsap.to(type, {
              opacity: p < 0.4 ? 1 : 1 - (p - 0.4) * 2,
              width: `${Math.max(0, 33 - p * 40)}%`,
              duration: 0.3,
              overwrite: "auto",
            });
          }

          const currentViewportStartY = startY - window.scrollY;

          gsap.to(search, {
            x: gsap.utils.interpolate(startX, endX + searchOffset, p),
            y: gsap.utils.interpolate(currentViewportStartY, endY, p),
            width: gsap.utils.interpolate(startW, endW, p),
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });

      ScrollTrigger.refresh();
    };

    setup();
    window.addEventListener("resize", setup);
    return () => window.removeEventListener("resize", setup);
  });

  useGSAP(() => {
    if (!searchRef.current) return;

    if (mode === "search" && expandedAnchorRef.current) {
      const eR = expandedAnchorRef.current.getBoundingClientRect();

      gsap.to(searchRef.current, {
        x: eR.left + eR.width / 2,
        y: eR.top + eR.height / 2,
        width: eR.width,
        xPercent: -50,
        yPercent: -50,
        duration: 0.45,
        ease: "power3.out",
        overwrite: "auto",
      });
    }

    if (mode === "collapsed") {
      ScrollTrigger.update();
    }
  }, [mode]);

  return (
    <div
      ref={searchRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }}
    >
      <SearchBar mode={mode} setMode={setMode} />
    </div>
  );
};

export default FloatingSearch;