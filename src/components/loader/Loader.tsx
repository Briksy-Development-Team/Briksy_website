import { useEffect, useRef, useState } from "react";
import Logos from "../../assets/loader/Logos.svg";
import Load from "../../assets/loader/loader.mp4";

type Props = {
  appReady: boolean;
  onComplete: () => void;
};

const Loader = ({ appReady, onComplete }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canExit, setCanExit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (appReady && videoRef.current) {
      videoRef.current.loop = false;

      if (videoRef.current.ended) {
        setCanExit(true);
      }
    }
  }, [appReady]);

  useEffect(() => {
    if (appReady && canExit) {
      document.body.style.overflow = "";
      onComplete();
    }
  }, [appReady, canExit, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center space-y-3 justify-center bg-[#f4f8ee]">
      <img src={Logos} alt="Briksy" className="w-[180px] md:w-[300px]" />

      <video
        ref={videoRef}
        src={Load}
        autoPlay
        muted
        loop
        playsInline
        className=" w-[220px] md:w-[350px]"
        onEnded={() => {
          setCanExit(true);
        }}
      />
    </div>
  );
};

export default Loader;
