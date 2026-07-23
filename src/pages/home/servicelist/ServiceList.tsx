import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockTraders } from "../../../data/mockTraders";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TraderGridCard from "../../../components/filterresult/trader/TraderGridCard";

const TABS = [
  "Electrical",
  "Plumbing",
  "Fencing",
  "Landscapers",
  "Conveyancers",
];


const rotate = <T,>(arr: T[], n: number): T[] => [
  ...arr.slice(n % arr.length),
  ...arr.slice(0, n % arr.length),
];

const ServiceList = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const navigate = useNavigate();

  const items = rotate(mockTraders, activeIdx);

  return (
    <section className="py-20 font-helvetica">
      <div className="w-full ml-10 ">
        <div className="flex items-end  mr-14 justify-between lg:items-center">
          <div className="mb-10 flex flex-col items-start justify-center text-[#342511]">
            <h2 className="text-[1.875rem] font-medium tracking-tight lg:text-[2.75rem]">
              Top Professionals
            </h2>
            <p className="text-[0.875rem] lg:text-[1rem]">
              Verified solo traders and specialists
            </p>
          </div>

          <button onClick={() => navigate("/coming-soon")} className="flex  items-center gap-2 font-medium text-[#562F00]">
            View All
            <ArrowUpRight size={24} />
          </button>
        </div>

        <div className="flex flex-wrap justify-center  gap-4 pb-6 text-[1rem] sm:justify-start">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveIdx(i)}
              className={`min-w-[140px] rounded-xl border  hover:border hover:border-primary border-[#DBDAD3] py-2 transition ${activeIdx === i ? "bg-[#242424] text-white" : "bg-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div key={activeIdx} className="animate-fade-in gap-3">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.2 },
              1440: { slidesPerView: 4 },
            }}
            className="[overscroll-behavior-x:contain] touch-pan-y"

          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <TraderGridCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
