import { Heart } from "lucide-react";
import type { Property } from "../../../types/property";

type Props = {
  item: Property;
};

const PropertyGridCard = ({ item }: Props) => (
  <div>
    <div className="relative h-[250px] overflow-hidden rounded-3xl">
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

    <div className="mt-4">
      <h3 className="line-clamp-2 text-[0.875rem] font-medium leading-[1.3]">
        {item.title}
      </h3>
      <p className="mt-1 text-[0.875rem] font-semibold">
        ${item.price.toLocaleString()}
      </p>
      <p className="mt-1 text-[0.75rem] text-[#6C6C6C]">
        {item.beds} Bed {item.baths} Bath&nbsp;&nbsp;{item.sqm} sqm
      </p>
      <div className="mt-2 flex items-center gap-2">
        <img
          src={item.posterAvatar}
          alt={item.posterName}
          className="h-6 w-6 rounded-full object-cover"
        />
        <span className="text-[0.75rem] text-[#6C6C6C]">{item.posterName}</span>
      </div>
    </div>
  </div>
);

export default PropertyGridCard;
