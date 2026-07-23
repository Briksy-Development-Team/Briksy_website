import { Heart, ArrowRight } from "lucide-react";
import type { Property } from "../../../types/property";
import Mappin from "../../../assets/icons/location.svg"

type Props = {
  item: Property;
};

const PropertyGridCard = ({ item }: Props) => (
  <div className="rounded-3xl h-[30rem] text-[#342511] mx-auto md:w-auto bg-white hover:border border-primary  text-left overflow-hidden">
    <div className="relative aspect-3/2 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />
      <span className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[0.75rem] font-medium">
        {item.badge}
      </span>
      <button
        className="absolute right-3 top-3"
        aria-label={item.isFavourite ? "Remove from favourites" : "Add to favourites"}
      >
        <Heart
          size={22}
          className={
            item.isFavourite
              ? "fill-white text-white"
              : "fill-transparent text-white stroke-[1.5]"
          }
        />
      </button>
    </div>

    <div className="p-4 flex  flex-col items-start">
      <h3 className="line-clamp-2 text-[0.9375rem] lg:text-[1.0625rem] font-bold leading-[1.3]">
        {item.title}
      </h3>

      <div className="mt-1.5 flex items-center gap-1 text-[0.875rem] lg:text-[1rem]">
        <img src={Mappin} alt="" />
        <span>{item.address}</span>
      </div>

      <p className="mt-2 text-[1rem] font-bold">
        ${item.price.toLocaleString()}
      </p>

      <p className="mt-1 text-[0.875rem] text-[#342511]">
        {item.beds} Bed&nbsp;&nbsp;•&nbsp;&nbsp;{item.baths} Bath&nbsp;&nbsp;•&nbsp;&nbsp;{item.sqm} sqm
      </p>

      <div className="mt-3 w-full border-t border-[#BF9F7D]" />

      <div className="mt-3 flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={item.posterAvatar}
            alt={item.posterName}
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-[0.875rem]">
            Listed by <span className="font-bold">{item.posterName}</span>
          </span>
        </div>
        <ArrowRight size={18} className="text-[#BF9F7D]" />
      </div>
    </div>
  </div>
);

export default PropertyGridCard;