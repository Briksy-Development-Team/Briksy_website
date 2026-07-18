import { Heart } from "lucide-react";
import type { Property } from "../../../types/property";

type Props = {
  item: Property;
};

const PropertyListCard = ({ item }: Props) => (
  <div className="flex items-center gap-3 px-2 py-2 lg:gap-4  bg-white border border-[#E7E7E4] rounded-[1.25rem]">
    <div className="relative h-full  w-[108px] shrink-0 overflow-hidden rounded-2xl">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />
      <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[0.625rem] font-medium">
        {item.badge}
      </span>
    </div>

    <div className="flex flex-1 justify-between gap-2 lg:gap-3">
      <div className="min-w-0">
        <h3 className="mt-3 line-clamp-2 text-[0.6875rem] lg:text-[1rem] font-bold leading-[1.3] text-[#222]">
          {item.title}
        </h3>
        <p className="mt-1 text-[0.75rem] lg:text-[1rem]  text-[#222]">
          ${item.price.toLocaleString()}
        </p>
        <p className="mt-1 text-[0.6875rem] lg:text-[0.875rem] text-[#6C6C6C]">
          {item.beds} Bed {item.baths} Bath&nbsp;&nbsp;{item.sqm} sqm
        </p>
        <div className="mt-2 flex items-center gap-1.5">
          <img
            src={item.posterAvatar}
            alt={item.posterName}
            className="h-5 w-5 rounded-full object-cover"
          />
          <span className="text-[0.6875rem] lg:text-[0.875rem] text-[#6C6C6C]">
            {item.posterName}
          </span>
        </div>
      </div>

      <button
        className="mt-1  flex items-start shrink-0"
        aria-label={item.isFavourite ? "Remove from favourites" : "Add to favourites"}
      >
        <Heart
          size={22}
          fill={item.isFavourite ? "currentColor" : "none"}
          className="text-[#666]"
        />
      </button>
    </div>
  </div>
);

export default PropertyListCard;
