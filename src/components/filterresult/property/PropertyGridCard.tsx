import { Heart } from "lucide-react";
import type { Property } from "../../../types/property";

type Props = {
  item: Property;
};

const PropertyGridCard = ({ item }: Props) => (
  <div className="rounded-3xl border border-[#E6E6E6] text-[#342511] bg-white  text-center">
    <div className="relative h-[250px]  overflow-hidden rounded-t-3xl">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />
      <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[0.75rem] font-medium">
        {item.badge}
      </span>
      <button
        className="absolute right-3 top-3"
        aria-label={item.isFavourite ? "Remove from favourites" : "Add to favourites"}
      >
        <Heart
          size={24}
          className={
            item.isFavourite ? "fill-white text-white" : "fill-none text-white"
          }
        />
      </button>
    </div>

    <div className="mt-4 p-4 flex text-[#342511] flex-col items-start">
      <h3 className="line-clamp-2 text-[0.875rem] lg:text-[1rem] font-bold leading-[1.3]">
        {item.title}
      </h3>
      <p className="mt-1 text-[0.875rem] lg:text-[1rem] font-semibold">
        ${item.price.toLocaleString()}
      </p>
      <p className="mt-1 text-[0.75rem] text-[0.875rem] text-[#342511]">
        {item.beds} Bed {item.baths} Bath&nbsp;&nbsp;{item.sqm} sqm
      </p>
      <div className="mt-2 flex items-center gap-2">
        <img
          src={item.posterAvatar}
          alt={item.posterName}
          className="h-6 w-6 rounded-full object-cover"
        />
        <span className="text-[0.75rem] text-[0.875rem] text-[#342511]">{item.posterName}</span>
      </div>
    </div>
  </div>
);

export default PropertyGridCard;
