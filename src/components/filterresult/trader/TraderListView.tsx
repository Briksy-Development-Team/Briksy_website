import type { Trader } from "../../../types/trader";
import TraderListCard from "./TraderListCard";

type Props = {
  traders: Trader[];
};

const TraderListView = ({ traders }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 xl:grid-cols-3">
    {traders.map((item) => (
      <TraderListCard key={item.id} item={item} />
    ))}
  </div>
);

export default TraderListView;
