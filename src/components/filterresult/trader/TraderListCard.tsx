import { Star } from "lucide-react";
import type { Trader } from "../../../types/trader";
import Approves from "../../../assets/logo/apprrove.svg";

type Props = {
  item: Trader;
};

const TraderListCard = ({ item }: Props) => (
  <div className="flex items-center gap-3 px-4 py-2 lg:gap-4 border text-[#342511] hover:bg-white border-[#E7E7E4] rounded-[1.25rem]">
    <div className="relative shrink-0">
      <img
        src={item.avatar}
        alt={item.name}
        className="  h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
      />
      <img
        src={Approves}
        alt="Verified"
        className="absolute -bottom-6 left-1/2 h-16 w-16 -translate-x-1/2"
      />
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="text-[1rem] font-bold ">{item.name}</h3>
      <p className="mt-0.5 text-[1rem] ">
        {item.tagLine} {item.role}
      </p>
      <p className="text-[0.875rem] ">{item.location}</p>

      <div className="mt-1 flex items-center gap-1 text-[1rem] ">
        <Star size={11} fill="currentColor" className="text-[#E2CBB3]" />
        <span>{item.rating}</span>
        <span>({item.reviews.toLocaleString()} reviews)</span>
      </div>

      <div className="mt-1.5 flex flex-wrap gap-1">
        {item.tags.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="rounded-full border border-[#E6E6E6] bg-white/50 px-2 py-0.5 text-[0.75rem] text-[#222222]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TraderListCard;
