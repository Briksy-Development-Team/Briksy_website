import { Heart, Star } from "lucide-react";
import type { Builder } from "../../../types/builder";
import Approves from "../../../assets/logo/apprrove.svg";

type Props = {
  item: Builder;
};

const BuilderListCard = ({ item }: Props) => (
  <div className="flex items-center gap-3 px-4 py-2 lg:gap-4 border3 text-[#342511] hover:bg-white border border-[#E7E7E4] rounded-[1.25rem]">
    <div className="relative shrink-0">
      <img
        src={item.avatar}
        alt={item.name}
        className=" h-16 w-16 lg:h-24 lg:w-24 rounded-full border-4 border-white object-cover"
      />

      <img
        src={Approves}
        alt="Verified"
        className="absolute -bottom-6 left-1/2 h-16 w-16 -translate-x-1/2"
      />
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="text-[1rem] font-semibold ">{item.name}</h3>
      <p className="mt-0.5 text-[0.875rem] ">{item.location}</p>

      <div className="mt-1.5 flex flex-wrap gap-1">
        {item.tags.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="rounded-full border border-[#E6E6E6] bg-white/50 px-2 py-0.5 text-[0.75rem] text-black"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between text-[0.75rem] text-[#6C6C6C]">
        <div className="flex items-center gap-1">
          <Star size={11} fill="currentColor" className="text-[#E2CBB3]" />
          <span className="font-bold text-[1rem]">{item.rating}</span>
          <span className="text-[1rem]">({item.reviews.toLocaleString()} reviews)</span>
        </div>
        <span className="text-[0.875rem]">Est.{item.establishedYear}</span>
      </div>
    </div>

    <button
      className="mt-1 shrink-0"
      aria-label={
        item.isFavourite ? "Remove from favourites" : "Add to favourites"
      }
    >
      <Heart
        size={22}
        fill={item.isFavourite ? "currentColor" : "none"}
        className="text-[#666]"
      />
    </button>
  </div>
);

export default BuilderListCard;
