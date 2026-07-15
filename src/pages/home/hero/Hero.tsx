import { useOutletContext } from "react-router-dom";
import HeroSearchBar from "../../../components/search-nav/HeroSearchBar";

const Hero = () => {
    const { mode, setMode } = useOutletContext<{ mode: "collapsed" | "search" | "ai", setMode: (m: "collapsed" | "search" | "ai") => void }>();

    return (
        <section className="relative min-h-screen w-full overflow-hidden font-helvetica">
            <div style={{ height: 150, overflow: 'auto', border: '5px solid red', position: 'fixed', top: 20, left: 20, zIndex: 999999, background: 'white' }}>
                <div style={{ height: 2000, background: 'linear-gradient(lightblue, darkblue)' }}>
                    scroll me — top left corner
                </div>
            </div>

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-14 pb-32">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-4 rounded-xl bg-black/70 px-6 py-3 backdrop-blur-md">
                    <div className="flex -space-x-2">
                        <img src="https://i.pravatar.cc/40?img=1" alt="" className="h-6 w-6 rounded-full border-2 border-white" />
                        <img src="https://i.pravatar.cc/40?img=2" alt="" className="h-6 w-6 rounded-full border-2 border-white" />
                        <img src="https://i.pravatar.cc/40?img=3" alt="" className="h-6 w-6 rounded-full border-2 border-white" />
                    </div>
                    <span className="text-white text-base">
                        <span className="font-semibold">340+</span>{" "}
                        <span className="italic">verified builders and professionals</span>
                    </span>
                </div>

                {/* Heading */}
                <h1 className="max-w-4xl text-center text-7xl font-light leading-tight text-white">
                    Find your place for
                    <br />
                    you and yours
                </h1>

                {/* Subtitle */}
                <p className="mt-5 max-w-xl text-center text-base leading-7 text-white/90">
                    Search properties, connect with verified professionals, and manage
                    your entire property journey all in one place.
                </p>

                <div className="mt-8 w-full max-w-4xl">
                    <HeroSearchBar mode={mode} setMode={setMode} />
                </div>
            </div>
        </section>
    );
};

export default Hero;