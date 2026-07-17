import type { Trader } from "../../../types/trader";
import TraderGridCard from "./TraderGridCard";

type Props = {
  traders: Trader[];
};

const TraderGridView = ({ traders }: Props) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {traders.map((item) => (
      <TraderGridCard key={item.id} item={item} />
    ))}
  </div>
);

export default TraderGridView;
