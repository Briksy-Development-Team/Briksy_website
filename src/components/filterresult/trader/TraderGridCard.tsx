import { Star } from "lucide-react";
import type { Trader } from "../../../types/trader";
import Approves from "../../../assets/logo/apprrove.svg";

type Props = {
  item: Trader;
};

const TraderGridCard = ({ item }: Props) => (
  <div className="rounded-3xl border border-[#E6E6E6] w-[300px] md:w-auto mx-auto text-[#342511] bg-white px-6 py-6 text-center">
    <div className="flex justify-center">
      <div className="relative">
        <img
          src={item.avatar}
          alt={item.name}
          className=" h-16 w-16 lg:h-24 lg:w-24  rounded-full object-cover"
        />
        <img
          src={Approves}
          alt="Verified"
          className="absolute -bottom-4 left-1/2 h-10 w-16 -translate-x-1/2"
        />
      </div>
    </div>

    <div className="mt-6">
      <h3 className="text-[1rem] font-bold ">
        {item.name}
      </h3>
      <p className="mt-1 text-[0.75rem] lg:text-[1rem] ">{item.tagLine}</p>
      <p className="mt-0.5 text-[0.75rem] lg:text-[1rem]">{item.location}</p>
    </div>

    <div className="mt-3 flex items-center justify-center gap-1 text-[0.75rem] text-[#6C6C6C]">
      <Star size={12} fill="currentColor" className="" />
      <span className="font-bold text-[1rem] text-[#342511]">{item.rating}</span>
      <span className="text-[1rem] text-[#342511]">({item.reviews.toLocaleString()} reviews)</span>
    </div>

    {/* Tags */}
    <div className="mt-3 flex flex-wrap justify-center gap-1.5">
      {item.tags.map((tag, i) => (
        <span
          key={`${tag}-${i}`}
          className="rounded-full border  px-2.5 py-0.5 text-[0.6875rem] border-[#E6E6E6] bg-[#342511]  text-[#E7E7E4]"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-5">
      <a
        href="#"
        className="text-[0.75rem] font-medium text-[#342511] "
      >
        View Details →
      </a>
    </div>
  </div>
);

export default TraderGridCard;
