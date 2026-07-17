import { Swiper, SwiperSlide } from "swiper/react";

import { mockBuilders } from "../../../data/mockBuilders";
import "swiper/css";
import BuilderGridCard from "../../../components/filterresult/builder/BuilderGridCard";



const   BuilderList = () => {
    return (
        <section className="py-20 font-helvetica">
            <div className="w-[95%] mx-auto">
                <div className="relative mb-10 flex flex-col text-[#342511] items-start justify-center">
                    <h2 className="text-[30px] font-medium  lg:text-[44px]">
                        Featured Businesses
                    </h2>
                    <p className="text-[0.875rem] lg:text-[1rem]">Trusted agencies and builders</p>

                    <button className="absolute right-0 flex items-center gap-2 text-lg font-medium text-[#562F00] transition-all hover:gap-3">
                        View All
                        <span>↗</span>
                    </button>
                </div>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        480: {
                            slidesPerView: 1.2,
                        },
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {mockBuilders.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BuilderGridCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BuilderList;
