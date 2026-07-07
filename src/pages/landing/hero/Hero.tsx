import HeroV from "../../../assets/videos/Hero.mp4";
import HeroSearch from "./HeroSearch";

const Hero = () => {
    return (
        <section className="relative w-full font-helvetica min-h-screen overflow-hidden">
            {/* Background Video */}
            <video
                src={HeroV}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            />

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

                {/* Search */}
                <div className="mt-8 w-full max-w-4xl">
                    <HeroSearch />
                </div>
            </div>
        </section>
    );
};

export default Hero;