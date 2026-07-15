import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import imageone from "../../../assets/dummy/imageone.png";
import imagetwo from "../../../assets/dummy/imagetwo.png";
import imagethree from "../../../assets/dummy/imagethree.png";
import imagefour from "../../../assets/dummy/imagefour.png";

const properties = [
    {
        id: 1,
        image: imageone,
        tag: "FOR RENT",
        tagColor: "bg-blue-100 text-blue-700",
        location: "Mumbai, Maharashtra",
        title: "Spacious 3 BHK Sea-Facing Apartment",
        price: "Starting from ₹45,000/mo",
        extra: "1,450 sqft",
        active: true,
    },
    {
        id: 2,
        image: imagetwo,
        tag: "FOR SALE",
        tagColor: "bg-[#ECE3D0] text-[#4A3313]",
        location: "Gurugram, Haryana",
        title: "Premium 4 BHK Villa with Private Pool",
        price: "Starting from ₹2.8 Cr",
        extra: "Ready to Move",
    },
    {
        id: 3,
        image: imagethree,
        tag: "NEW LISTING",
        tagColor: "bg-[#E6D1B5] text-[#8B5A1E]",
        location: "Bengaluru, Karnataka",
        title: "Modern 2 BHK in Whitefield Tech Hub",
        price: "Starting from ₹22,000/mo",
        extra: "980 sqft",
    },
    {
        id: 4,
        image: imagefour,
        tag: "PRICE DROPPED",
        tagColor: "bg-[#F3E6E2] text-[#8D6A61]",
        location: "Pune, Maharashtra",
        title: "Cozy Studio Apartment Near IT Park",
        price: "Now ₹12,500/mo",
        extra: "Was ₹15,000 • 480 sqft",
    },
    {
        id: 5,
        image: imageone,
        tag: "FOR SALE",
        tagColor: "bg-[#ECE3D0] text-[#4A3313]",
        location: "Ahmedabad, Gujarat",
        title: "Luxury Penthouse with Skyline View",
        price: "Starting from ₹3.4 Cr",
        extra: "2,400 sqft",
    },
    {
        id: 6,
        image: imagetwo,
        tag: "NEW",
        tagColor: "bg-[#E6D1B5] text-[#8B5A1E]",
        location: "Hyderabad, Telangana",
        title: "Elegant Duplex Near Financial District",
        price: "Starting from ₹68 Lakh",
        extra: "1,650 sqft",
    },
    {
        id: 7,
        image: imagethree,
        tag: "FOR RENT",
        tagColor: "bg-blue-100 text-blue-700",
        location: "Chennai, Tamil Nadu",
        title: "Fully Furnished 2 BHK Apartment",
        price: "Starting from ₹32,000/mo",
        extra: "1,120 sqft",
    },
    {
        id: 8,
        image: imagefour,
        tag: "FEATURED",
        tagColor: "bg-yellow-100 text-yellow-700",
        location: "Goa",
        title: "Beachside Luxury Holiday Villa",
        price: "Starting from ₹5.1 Cr",
        extra: "Private Pool",
    },
];

const PropertyList = () => {
    return (
        <section className="py-20  font-helvetica">
            <div className="w-[95%] mx-auto">
                <div className="relative flex items-center justify-center mb-10">
                    <h2 className="text-[2.75rem] font-semibold text-[#242424]">
                        Our Featured Properties
                    </h2>

                    <button className="absolute right-0 flex items-center gap-2 text-lg font-medium text-[#562F00] hover:gap-3 transition-all">
                        View All
                        <span>↗</span>
                    </button>
                </div>

                <Swiper
                    spaceBetween={24}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.2,
                        },
                        1024: {
                            slidesPerView: 3.2,
                        },
                        1280: {
                            slidesPerView: 4.2,
                        },
                    }}
                >
                    {properties.map((property) => (
                        <SwiperSlide key={property.id}>
                            <div className="rounded-xl overflow-hidden  flex flex-col items-center bg-white hover:bg-[#E7D0B3]">
                                <div className="relative p-2">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="h-[15rem] w-[20rem] rounded-2xl object-cover"
                                    />

                                    <span
                                        className={`absolute top-5 left-5 rounded-full px-4 py-2 text-[1rem] font-semibold ${property.tagColor}`}
                                    >
                                        {property.tag}
                                    </span>
                                </div>

                                <div className="px-5 pb-6">
                                    <p className="text-[#88867A] hover:text-black font-medium text-[0.875rem]">
                                        {property.location}
                                    </p>

                                    <h3 className="mt-5 text-[1.25rem] leading-tight font-semibold ">
                                        {property.title}
                                    </h3>

                                    <div className="mt-5 flex flex-wrap gap-2 text-[0.875rem] text-[#6B6B6B] hover:text-black">
                                        <span>{property.price}</span>
                                        <span>•</span>
                                        <span>{property.extra}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PropertyList;
