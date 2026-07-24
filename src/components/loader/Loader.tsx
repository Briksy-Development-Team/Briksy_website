import { useEffect, useState } from "react";
import Logos from "../../assets/loader/Logos.svg";
import LoaderA from "../../assets/loader/LoaderA.svg"; // Your animated SVG

type Props = {
  appReady: boolean;
  onComplete: () => void;
};

const Loader = ({ appReady, onComplete }: Props) => {
  const [canExit, setCanExit] = useState(false);

  // Lock scrolling when loader mounts
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Enforce a minimum display time for the SVG animation
  useEffect(() => {
    const minDisplayTimer = setTimeout(() => {
      setCanExit(true);
    }, 2000); // Adjust this delay (in ms) to match your SVG's animation duration

    return () => clearTimeout(minDisplayTimer);
  }, []);

  // Trigger completion only when the app is ready AND the minimum animation time has passed
  useEffect(() => {
    if (appReady && canExit) {
      document.body.style.overflow = "";
      onComplete();
    }
  }, [appReady, canExit, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center space-y-3 justify-center bg-[#f4f8ee]">
      <img src={Logos} alt="Briksy" className="w-[180px] md:w-[300px]" />

      <img
        src={LoaderA}
        alt="Loading..."
        className="w-[220px] md:w-[350px]"
      />
    </div>
  );
};

export default Loader;