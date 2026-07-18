import { Heart, Star } from "lucide-react";
import type { Builder } from "../../../types/builder";
import Approves from "../../../assets/logo/apprrove.svg";

type Props = {
  item: Builder;
};

const BuilderGridCard = ({ item }: Props) => {
  return (
    <div className="overflow-hidden rounded-[2rem] w-[300px] mx-auto md:w-auto text-[#342511] bg-white ">
      <div className="relative h-[160px]">
        <img
          src={item.bannerImage}
          alt={item.name}
          className="h-full w-full object-cover"
        />

        <button className="absolute right-5 top-5">
          <Heart
            size={24}
            className={
              item.isFavourite
                ? "fill-white text-white"
                : "fill-none text-white"
            }
          />
        </button>
      </div>

      <div className="relative px-6 pb-6">
        <div className="-mt-10 relative w-fit">
          <img
            src={item.avatar}
            alt={item.name}
            className="h-20 w-20 rounded-full border-4 border-white object-cover"
          />

          <img
            src={Approves}
            alt="Verified"
            className="absolute -bottom-6 left-1/2 h-16 w-16 -translate-x-1/2"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-[1rem] font-bold leading-tight text-[#342511]">
            {item.name}
          </h3>

          <p className="mt-2 text-[0.875rem] ">{item.location}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border-[#E6E6E6] bg-[#342511]  text-[#E7E7E4] px-4 py-1 text-[0.75rem] "
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="my-6 h-px bg-[#ECE7E2]" />

          <div className="flex items-center justify-between text-[1rem]">
            <div className="flex items-center gap-2">
              <Star size={18} className="fill-[#E2CBB3] text-[#E2CBB3]" />

              <span className="font-bold  text-[1rem] text-[#342511]">
                {item.rating}
              </span>

              <span className=" text-[1rem] text-[#342511]">
                ({item.reviews.toLocaleString()} reviews)
              </span>
            </div>

            <div className="flex items-center gap-4">

              <span className="text-[0.875rem]">Est.{item.establishedYear}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderGridCard;
