import Imgone from "../../../assets/reviews/img1.svg";
import Imgtwo from "../../../assets/reviews/img2.svg";
import Imgthree from "../../../assets/reviews/img3.svg";

const reviews = [
    {
        image: Imgone,
        imagePosition: "top",
        quote:
            "Exceptional service and deep local knowledge: [Link]. Seamless process, highly recommend: [Link].",
        name: "Pankit Patel",
        company: "ELsolveIT",
    },
    {
        image: Imgtwo,
        imagePosition: "bottom",
        quote:
            "Outstanding support and personalized attention: [Link]. Truly a game-changer for my project: [Link].",
        name: "Sarah Johnson",
        company: "TechSphere",
    },
    {
        image: Imgthree,
        imagePosition: "top",
        quote:
            "Remarkable expertise and quick turnaround: [Link]. Their insights were invaluable: [Link].",
        name: "Michael Chen",
        company: "InnovateNow",
    },
];

const Blogs = () => {
    return (
        <section className="w-full font-helvetica">
            <div className="flex flex-col xl:flex-row gap-8 py-20 px-[5%]">
                <div className="xl:w-[24%] pt-8">
                    <p className="uppercase tracking-[1px] text-[0.6875rem] font-medium text-yellowgray-50 mb-2">
                        BLOGS
                    </p>

                    <h2 className="text-[2.25rem] leading-snug font-medium mb-0">
                        Latest Property <br /> Insights & <br />
                        Resources
                    </h2>

                    <button className="mt-10 px-5 py-3 rounded-xl font-medium bg-[#342511] text-white text-[0.875rem]">
                        View All Articles
                    </button>
                </div>

                <div className="xl:w-[80%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {reviews.map(({ image, imagePosition, quote, name, company }) => {
                        const img = (
                            <img
                                src={image}
                                alt={`${name} review`}
                                className="w-full h-[50%] object-cover"
                            />
                        );

                        const content = (
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <p className="text-[1.125rem] font-medium text-[#222]">
                                    “ {quote} ”
                                </p>

                                <div className={imagePosition === "top" ? "mt-16" : "mt-12"}>
                                    <h4 className="text-[1rem] text-gray-100">{name}</h4>
                                    <p className="text-[1rem] text-gray-100 mt-1">
                                        from {company}
                                    </p>
                                </div>
                            </div>
                        );

                        return (
                            <div
                                key={name}
                                className="rounded-3xl overflow-hidden border border-[#ddd8cf] bg-white flex flex-col"
                            >
                                {imagePosition === "top" ? (
                                    <>
                                        {img}
                                        {content}
                                    </>
                                ) : (
                                    <>
                                        {content}
                                        {img}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blogs;