import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { mockProperties } from "../../../data/mockProperties";
import PropertyGridCard from "../../../components/filterresult/property/PropertyGridCard";
import "swiper/css";
import { ArrowUpRight } from "lucide-react";

const TrendingProperty = () => {
    const navigate = useNavigate();
    return (
        <section className="py-20 font-helvetica">
            <div className="w-[95%] mx-auto">
                <div className="flex justify-between lg:items-center items-end">
                    <div className="relative mb-10 flex flex-col text-[#342511] items-start justify-center">
                        <h2 className="lg:text-[2.75rem] text-[1.875rem] font-medium tracking-tight">
                            Featured Properties
                        </h2>
                        <p className="text-[0.875rem] lg:text-[1rem]">Verified solo traders and specialists</p>
                    </div>

                    <button onClick={() => navigate("/coming-soon")} className="flex items-center   gap-3 text-[#562F00] font-medium">
                        View All
                        <ArrowUpRight size={24} />
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
                            slidesPerView: 2.1,
                        },
                        1024: {
                            slidesPerView: 3.2,
                        },
                        1440: {
                            slidesPerView: 4.3,
                        },
                    }}
                    className="[overscroll-behavior-x:contain] touch-pan-y"

                >
                    {mockProperties.map((item) => (
                        <SwiperSlide key={item.id}>
                            <PropertyGridCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TrendingProperty;
