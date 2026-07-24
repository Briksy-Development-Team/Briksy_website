import { Star } from "lucide-react";
import type { Trader } from "../../../types/trader";
import Approves from "../../../assets/logo/apprrove.svg";
import Mappin from "../../../assets/icons/location.svg";

type Props = {
  item: Trader;
};

const TraderGridCard = ({ item }: Props) => (
  <div className="rounded-3xl border border-transparent transition-colors duration-200 overflow-hidden hover:border-primary flex flex-col items-center justify-between h-[30rem] w-full 
  md:w-auto mx-auto
   text-[#342511] bg-white px-6 py-6 text-center">
    <div className="flex justify-center ">
      <div className="relative">
        <img loading="lazy"
          src={item.avatar}
          alt={item.name}
          className=" h-16 w-16 lg:h-34 lg:w-34  rounded-full object-cover"
        />
        <img loading="lazy"
          src={Approves}
          alt="Verified"
          className="absolute -bottom-4 left-1/2 h-10 w-16 -translate-x-1/2"
        />
      </div>
    </div>

    <div className="mt-4 space-y-2">
      <h3 className="text-[1rem] font-bold ">{item.name}</h3>
      <p className="mt-1 text-[0.75rem] lg:text-[1rem] ">{item.tagLine}</p>
      <div className=" flex items-center justify-center gap-1 text-[0.875rem] lg:text-[1rem]">
        <img loading="lazy" src={Mappin} alt="" />
        <span className="text-[#342511]">{item.location}</span>
      </div>{" "}
    </div>

    <div className="mt-3 flex items-center  justify-center gap-1 text-[0.75rem] text-[#6C6C6C]">
      <Star size={12} fill="currentColor" className="" />
      <span className="font-bold text-[1rem] text-[#342511]">
        {item.rating}
      </span>
      <span className="text-[1rem] text-[#342511]">
        ({item.reviews.toLocaleString()} reviews)
      </span>
    </div>

    <div className="mt-3 w-[70%] flex flex-col items-center gap-1.5">
      <div className="flex gap-1.5">
        {item.tags.slice(0, 2).map((tag, i) => (
          <span
            key={i}
            className="rounded-full border border-[#E6E6E6] bg-[#342511] px-3 py-1 text-[0.75rem] text-[#E7E7E4]"
          >
            {tag}
          </span>
        ))}
      </div>

      {item.tags[2] && (
        <span className="rounded-full border border-[#E6E6E6] bg-[#342511] px-3 py-1 text-[0.75rem] text-[#E7E7E4]">
          {item.tags[2]}
        </span>
      )}
    </div>

    <div className="mt-5">
      <a href="#" className="text-[0.75rem] lg:text-[0.875rem] font-medium text-[#342511] ">
        View Details →
      </a>
    </div>
  </div>
);

export default TraderGridCard;
