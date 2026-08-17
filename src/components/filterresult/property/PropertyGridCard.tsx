import { Heart, ArrowRight } from "lucide-react";
import type { Property } from "../../../types/property";
import Mappin from "../../../assets/icons/location.svg";

type Props = {
  item: Property;
};

const PropertyGridCard = ({ item }: Props) => (
  <div className="flex h-[30rem] w-full  flex-col border border-transparent  transition-colors duration-200 overflow-hidden rounded-3xl bg-white text-left text-[#342511] mx-auto 
   hover:border-primary">
    <div className="relative h-[60%] shrink-0 overflow-hidden">
      <img loading="lazy"
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />

      {item.badge && (
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[0.75rem] font-medium ${
          item.badge === "BRIKSY EXCLUSIVE"
            ? "bg-[#1F1A17] text-[#F5E6C8]"
            : "bg-white/90 text-[#342511]"
        }`}>
          {item.badge}
        </span>
      )}

      <button
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/85"
        aria-label={item.isFavourite ? "Remove from favourites" : "Add to favourites"}
      >
        <Heart
          size={18}
          className={
            item.isFavourite
              ? "fill-[#342511] text-[#342511]"
              : "fill-transparent text-[#342511] stroke-[1.5]"
          }
        />
      </button>
    </div>

    {/* Content: fills remaining space, internal content is clamped/truncated so it can't overflow */}
    <div className="flex min-h-0 flex-1 flex-col p-4">
      <h3 className="line-clamp-2 text-[0.9375rem] font-bold leading-[1.3] lg:text-[1.0625rem]">
        {item.title}
      </h3>

      <div className="mt-1 flex items-center gap-1 text-[0.875rem] lg:text-[1rem]">
        <img loading="lazy" src={Mappin} alt="" className="shrink-0" />
        <span className="truncate">{item.address}</span>
      </div>

      <p className="mt-2 text-[1rem] font-bold">
        ${item.price.toLocaleString()}
      </p>

      <p className="mt-1 truncate text-[0.875rem] text-[#342511]">
        {item.beds} Bed&nbsp;&nbsp;•&nbsp;&nbsp;{item.baths} Bath&nbsp;&nbsp;•&nbsp;&nbsp;{item.sqm} sqm
      </p>

      {/* pushes footer to the bottom regardless of how much text is above */}
      <div className="mt-auto">
        <div className="w-full border-t border-[#BF9F7D]" />

        <div className="mt-3 flex w-full items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <img loading="lazy"
              src={item.posterAvatar}
              alt={item.posterName}
              className="h-7 w-7 shrink-0 rounded-full object-cover"
            />
            <span className="min-w-0 truncate text-[0.875rem]">
              Listed by <span className="font-bold">{item.posterName}</span>
            </span>
          </div>
          <ArrowRight size={18} className="shrink-0 text-[#BF9F7D]" />
        </div>
      </div>
    </div>
  </div>
);

export default PropertyGridCard;
