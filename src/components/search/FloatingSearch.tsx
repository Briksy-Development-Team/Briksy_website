import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const SCROLL_THRESHOLD = 400; 

export function useScrollFade(ref: React.RefObject<HTMLElement | null>, direction: "in" | "out" = "out", enabled = true) {
  useGSAP(() => {
    if (!ref.current) return;

    const before = direction === "out" ? 1 : 0;
    const after = direction === "out" ? 0 : 1;

    if (!enabled) {
      gsap.set(ref.current, { opacity: after, pointerEvents: "auto" });
      return;
    }

    const alreadyScrolled = window.scrollY > SCROLL_THRESHOLD;

    gsap.set(ref.current, {
      opacity: alreadyScrolled ? after : before,
      pointerEvents: alreadyScrolled === (direction === "out") ? "none" : "auto",
    });

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: `${SCROLL_THRESHOLD} top`,
      onEnter: () =>
        gsap.to(ref.current, {
          opacity: after,
          pointerEvents: direction === "out" ? "none" : "auto",
          duration: 0.3,
          overwrite: "auto",
        }),
      onLeaveBack: () =>
        gsap.to(ref.current, {
          opacity: before,
          pointerEvents: direction === "out" ? "auto" : "none",
          duration: 0.3,
          overwrite: "auto",
        }),
    });

    return () => trigger.kill();
  }, [enabled]);
}

export function useNavExpand(
  navRef: React.RefObject<HTMLElement | null>,
  panelRef: React.RefObject<HTMLElement | null>,
  mode: "collapsed" | "search" | "ai",
  onPanelHidden: () => void
) {
  const tl = useRef<gsap.core.Timeline | null>(null);
  useGSAP(() => {
    if (!navRef.current || !panelRef.current) return;

    tl.current = gsap.timeline({
      paused: true,
      onReverseComplete: onPanelHidden,
    })
      .to(navRef.current, { height: 200, duration: 0.35, ease: "power2.out" }, 0)
      .fromTo(
        panelRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        0.1
      );
  }, []);

  useGSAP(() => {
    if (mode !== "collapsed") {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [mode]);
}