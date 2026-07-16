import { Swiper, SwiperSlide } from "swiper/react";
import { Heart } from "lucide-react";

import "swiper/css";

import imageone from "../../../assets/dummy/imageone.png";
import imagetwo from "../../../assets/dummy/imagetwo.png";
import imagethree from "../../../assets/dummy/imagethree.png";
import imagefour from "../../../assets/dummy/imagefour.png";

type Property = {
    id: number;
    image: string;
    title: string;
    price: string;
    duration: string;
    rating: string;
};

const properties: Property[] = [
    {
        id: 1,
        image: imageone,
        title: "Home in Bondi Beach",
        price: "$520",
        duration: "2 nights",
        rating: "4.98",
    },
    {
        id: 2,
        image: imagetwo,
        title: "Villa in Noosa Heads",
        price: "$890",
        duration: "3 nights",
        rating: "4.95",
    },
    {
        id: 3,
        image: imagethree,
        title: "Apartment in Southbank",
        price: "$310",
        duration: "2 nights",
        rating: "4.91",
    },
    {
        id: 4,
        image: imagefour,
        title: "Penthouse in Surfers Paradise",
        price: "$1,250",
        duration: "4 nights",
        rating: "5.0",
    },
    {
        id: 5,
        image: imageone,
        title: "Beach House in Byron Bay",
        price: "$760",
        duration: "2 nights",
        rating: "4.96",
    },
    {
        id: 6,
        image: imagetwo,
        title: "Cabin in Blue Mountains",
        price: "$285",
        duration: "2 nights",
        rating: "4.93",
    },
    {
        id: 7,
        image: imagethree,
        title: "Studio in Fitzroy",
        price: "$220",
        duration: "1 night",
        rating: "4.88",
    },
    {
        id: 8,
        image: imagefour,
        title: "Waterfront Villa in Gold Coast",
        price: "$980",
        duration: "3 nights",
        rating: "4.99",
    },
];
const TrendingProperty = () => {
    return (
        <section className="w-[95%] mx-auto py-20">
            <div className="relative flex items-center justify-between mb-12">
                <h2 className="text-[2.75rem] font-medium text-[#242424]">
                    Our Featured Properties
                </h2>

                <button className="absolute right-0 flex items-center gap-2 text-[1rem]  text-[#562F00] hover:gap-3 transition-all">
                    View All
                    <span>↗</span>
                </button>
            </div>

            <Swiper
                spaceBetween={28}
                slidesPerView={1.3}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2.6,
                    },
                    1024: {
                        slidesPerView: 3.6,
                    },
                    1280: {
                        slidesPerView: 5.2,
                    },
                    1536: {
                        slidesPerView: 6,
                    },
                }}
            >
                {properties.map((property) => (
                    <SwiperSlide key={property.id}>
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-[26px]">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="aspect-[4/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <button className="absolute right-4 top-4 rounded-full bg-black/20 p-2 backdrop-blur-sm transition hover:bg-black/40">
                                    <Heart size={22} className="stroke-white" strokeWidth={2} />
                                </button>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-[1rem] font-semibold text-[#33251A] line-clamp-1">
                                    {property.title}
                                </h3>

                                <div className="mt-1 flex items-center gap-2 text-[0.875rem] text-[#8B6F54]">
                                    <span>{property.price}</span>

                                    <span>for {property.duration}</span>

                                    <span>•</span>

                                    <span>★ {property.rating}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TrendingProperty;
