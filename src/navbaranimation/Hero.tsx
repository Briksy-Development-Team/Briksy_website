import heroBg from "../assest/hero/herobg.svg";

type HeroProps = {
    heroAnchorRef: React.RefObject<HTMLDivElement | null>;
};

const Hero = ({ heroAnchorRef }: HeroProps) => {
    return (
        <section className="pt-20 p-8">
            <div className="relative h-[90vh] rounded-[30px] overflow-hidden">
                <img
                    src={heroBg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <p className="text-white mb-6">
                        BUILD SMARTER. INVEST BETTER.
                    </p>

                    <h1 className="text-white xl:text-6xl max-w-4xl text-center leading-tight">
                        From trusted builders to premium living spaces,
                        discover properties designed for your future
                        with BRIKSY.
                    </h1>

                    <p className="text-white mt-8">
                        4,200+ property seekers trust BRIKSY
                    </p>

                    <div className="mt-12 w-full flex justify-center">
                        <div
                            ref={heroAnchorRef}
                            className="w-full max-w-[720px] h-[80px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;