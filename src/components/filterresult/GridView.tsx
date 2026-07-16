import { Heart, Star } from "lucide-react";
import type { Property } from "../../types/property";

type Props = {
  properties: Property[];
};

const GridCard = ({ item }: { item: Property }) => {
  return (
    <div className="">
      <div className="relative h-[250px]  overflow-hidden rounded-3xl">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[0.75rem] font-medium">
          {item.badge}
        </span>

        <button className="absolute right-3 top-3">
          <Heart
            size={24}
            className={`${item.isFavourite
              ? "fill-white text-white"
              : "fill-none text-white"
              }`}
          />
        </button>
      </div>

      <div className="mt-4">
        <h3 className="line-clamp-2 text-[0.875rem] font-medium leading-[1.3]">
          {item.title}
        </h3>

        <p className="mt-1 text-[0.75rem] text-[#767676]">
          {item.hours} · {item.date}
        </p>

        <div className="mt-1 flex items-center gap-1 text-[0.75rem] text-[#6C6C6C]">
          <span className=" ">
            From <b className="text-black">${item.price.toLocaleString()} </b>
          </span>

          <span>/ guest</span>

          <span>·</span>

          <Star size={12} fill="currentColor" />

          <span>{item.rating}</span>

          <span>·</span>

          <span>{item.reviews.toLocaleString()} reviews</span>
        </div>
      </div>
    </div>
  );
};

const GridView = ({ properties }: Props) => {
  return (
    <div className="grid grid-cols-1  gap-6 md:grid-cols-2 xl:grid-cols-5">
      {properties.map((item) => (
        <GridCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GridView;
