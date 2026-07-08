const stats = [
    { value: "340+", label: "Verified builders on platform" },
    { value: "1,200+", label: "Properties Listed" },
    { value: "15+", label: "Property Services Available" },
    { value: "4.8", label: "Average Platform Rating" },
];

const About = () => {
    return (
        <section className=" pb-20">
            <div className="mx-auto w-[90%] -translate-y-16 rounded-3xl bg-white px-10 py-14">
                <p className="text-center text-xs font-semibold tracking-[0.2em] text-gray-400">
                    PLATFORM OVERVIEW
                </p>

                <p className="mx-auto mt-4 w-[70%] text-center text-4xl leading-tight tracking-tight text-gray-800">
                    Briksy connects buyers, builders, agents, and trusted property
                    professionals in one seamless platform. Every profile is verified,
                    and every listing is reviewed before it goes live.
                </p>

                <div className="mt-10 border-t border-gray-200" />

                <div className="mt-10 w-[90%] text-center grid grid-cols-2 gap-y-8 sm:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-7xl font-medium text-[#3D2A0B]">{stat.value}</p>
                            <p className="mt-2 text-sm text-[#8B6F54]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
