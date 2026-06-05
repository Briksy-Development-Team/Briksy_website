import { useState } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

// --- 1. Types ---
type PropertyBadge = "FOR RENT" | "FOR SALE" | "NEW LISTING" | "PRICE DROPPED" | "VERIFIED";

interface Property {
  id: string;
  badge: PropertyBadge;
  image: string;
  location: string;
  title: string;
  details: string;
}

// --- 2. Mock Data ---
const PROPERTIES: Property[] = [
  {
    id: "1",
    badge: "FOR RENT",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    location: "Mumbai, Maharashtra",
    title: "Spacious 3 BHK Sea-Facing Apartment",
    details: "Starting from ₹45,000/mo · 1,450 sqft",
  },
  {
    id: "2",
    badge: "FOR SALE",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    location: "Gurugram, Haryana",
    title: "Premium 4 BHK Villa with Private Pool",
    details: "Starting from ₹2.8 Cr · Ready to Move",
  },
  {
    id: "3",
    badge: "NEW LISTING",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    location: "Bengaluru, Karnataka",
    title: "Modern 2 BHK in Whitefield Tech Hub",
    details: "Starting from ₹22,000/mo · 980 sqft",
  },
  {
    id: "4",
    badge: "PRICE DROPPED",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    location: "Pune, Maharashtra",
    title: "Cozy Studio Apartment Near IT Park",
    details: "Now ₹12,500/mo · Was ₹15,000 · 480 sqft",
  },
  {
    id: "5",
    badge: "FOR SALE",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    location: "Noida, Uttar Pradesh",
    title: "Luxury Duplex Penthouse",
    details: "Starting from ₹3.5 Cr · 3,200 sqft",
  },
  {
    id: "6",
    badge: "FOR SALE",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    location: "Gurugram, Haryana",
    title: "Premium 4 BHK Villa with Private Pool",
    details: "Starting from ₹2.8 Cr · Ready to Move",
  },
  {
    id: "7",
    badge: "NEW LISTING",
    image: "https://images.unsplash.com/photo-1600607687931-cecebd802404?auto=format&fit=crop&w=800&q=80",
    location: "Bengaluru, Karnataka",
    title: "Modern 2 BHK in Whitefield Tech Hub",
    details: "Starting from ₹22,000/mo · 980 sqft",
  },
];

// Map the same data for the 3rd row, but override the badge to "VERIFIED" to match your design
const VERIFIED_PROPERTIES: Property[] = PROPERTIES.map(p => ({
  ...p,
  badge: "VERIFIED"
}));


// --- 3. Badge Styles Helper ---
const getBadgeStyles = (badge: PropertyBadge) => {
  switch (badge) {
    case "FOR RENT": return "bg-blue-100 text-blue-800";
    case "FOR SALE": return "bg-green-100 text-green-800";
    case "NEW LISTING": return "bg-[#E8D4A2] text-yellow-900";
    case "PRICE DROPPED": return "bg-red-100 text-red-800";
    case "VERIFIED": return "bg-[#253221] text-white"; // Dark badge from your design
    default: return "bg-gray-100 text-gray-800";
  }
};


// --- 4. Reusable Slider Row Component ---
interface SliderRowProps {
  title: string;
  data: Property[];
}

const SliderRow = ({ title, data }: SliderRowProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="mb-14 last:mb-0">
      {/* Row Header & Custom Navigation */}
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-[1.875rem] font-medium text-gray-900">{title}</h2>

        <div className="flex items-center gap-2">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-transparent hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#253221] hover:bg-[#1a2417] transition-colors z-10"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        onSwiper={setSwiperInstance}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          520: { slidesPerView: 1.5, spaceBetween: 16 },
          768: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3.3, spaceBetween: 24 },
          1280: { slidesPerView: 4.5, spaceBetween: 20 },
        }}
        className="w-full pb-4"
      >
        {data.map((property) => (
          <SwiperSlide key={property.id} className="py-2 px-2">
            <div className="bg-white rounded-[20px]   overflow-hidden  transition-shadow duration-300 group h-[396px] w-[320px] flex flex-col">

              <div className="relative p-2 pb-0 h-[240px] overflow-hidden shrink-0">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover rounded-[14px] group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span
                  className={`absolute top-6 left-6 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide ${getBadgeStyles(
                    property.badge
                  )}`}
                >
                  {property.badge}
                </span>
              </div>

              {/* Text Content */}
              {/* p-5 gives it that nice breathing room from the edges */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-yellowgray-50 font-medium text-[0.875rem]   mb-2">
                  {property.location}
                </p>

                <h3 className="text-[1.25rem] font-medium text-[#222222] leading-snug mt-4">
                  {property.title}
                </h3>

                {/* mt-auto forces this to the very bottom, keeping it aligned even if the title is short */}
                <p className="text-yellowgray-50 text-[0.875rem] font-medium mt-auto">
                  {property.details}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


const TrendingProperties = () => {
  return (
    <section className="w-full  py-16 px-2  md:px-3 font-helvetica overflow-hidden">
      <div className="mx-8 ">

        <div className="flex items-center gap-2 mb-8 text-primary font-medium">
          <Sparkles size={16} />
          <span className="text-[1rem]">Trending Properties</span>
        </div>

        {/* The 3 Sliders */}
        <SliderRow title="By Agents" data={PROPERTIES} />
        <SliderRow title="By Agencies" data={PROPERTIES} />
        <SliderRow title="Verified By Us" data={VERIFIED_PROPERTIES} />

      </div>
    </section>
  );
};

export default TrendingProperties;