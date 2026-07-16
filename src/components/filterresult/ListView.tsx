import { Heart, Star } from "lucide-react";
import type { Property } from "../../types/property";

type Props = {
    properties: Property[];
};

const ListCard = ({ item }: { item: Property }) => (
    <div className="flex items-start gap-2  lg:gap-3">
        <div className="h-[100px] w-[108px] shrink-0 overflow-hidden rounded-2xl">
            <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
            />
        </div>

        <div className="flex flex-1 justify-between gap-3">
            <div className="min-w-0">
                <span className="inline-flex rounded-full border border-[#E6E6E6] bg-white px-3 py-1 text-xs font-medium shadow-md">
                    {item.badge}
                </span>

                <h3 className="mt-3 line-clamp-2 text-[0.6875rem] font-medium leading-[1.3] text-[#222]">
                    {item.title}
                </h3>

                <p className="mt-1 text-[0.75rem] text-[#767676]">
                    {item.hours} · {item.date}
                </p>

                <div className="mt-1 flex items-center gap-1 text-[0.75rem] text-[#666]">
                    <span className="font-semibold text-black">
                        From ₹{item.price.toLocaleString()}
                    </span>

                    <span>/ guest</span>

                    <span>·</span>

                    <Star size={12} fill="currentColor" className="text-[#666]" />

                    <span>{item.rating}</span>

                    <span>·</span>

                    <span>{item.reviews.toLocaleString()} reviews</span>
                </div>
            </div>

            <button className="mt-1 shrink-0">
                <Heart
                    size={22}
                    fill={item.isFavourite ? "currentColor" : "none"}
                    className="text-[#666] "
                />
            </button>
        </div>
    </div>
);

const ListView = ({ properties }: Props) => {
    return (
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 xl:grid-cols-3">
            {properties.map((item) => (
                <ListCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ListView;