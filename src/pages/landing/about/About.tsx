const stats = [
    { value: "340+", label: "Verified builders on platform" },
    { value: "1,200+", label: "Properties Listed" },
    { value: "15+", label: "Property Services Available" },
    { value: "4.8", label: "Average Platform Rating" },
];

const About = () => {
    return (
        <section className=" pb-20">
            <div className="mx-auto xl:w-[90%] w-full -translate-y-16 rounded-3xl bg-white px-10 py-14">
                <p className="text-center text-xs font-semibold tracking-[0.2em] text-gray-400">
                    PLATFORM OVERVIEW
                </p>

                <p className="mx-auto mt-4 w-full  font-medium xl:w-[70%] sm:text-[1.875rem] text-center xl:text-[2.25rem] leading-tight tracking-tight text-gray-800">
                    Briksy connects buyers, builders, agents, and trusted property
                    professionals in one seamless platform. Every profile is verified,
                    and every listing is reviewed before it goes live.
                </p>

                <div className="mt-10 border-t border-gray-200" />

                <div className="mt-10 xl:w-[90%] w-full text-start xl:text-center grid grid-cols-2 gap-y-8 xl:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className=" text-[3rem]  sm:text-[3.75rem] xl:text-[5.125rem]  font-normal xl:font-medium text-[#3D2A0B]">{stat.value}</p>
                            <p className="mt-0 text-[0.875rem] sm:text-[1rem] xl:text-[1.125rem] text-[#8B6F54]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
