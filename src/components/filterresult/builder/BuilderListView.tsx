import type { Builder } from "../../../types/builder";
import BuilderListCard from "./BuilderListCard";

type Props = {
  builders: Builder[];
};

const BuilderListView = ({ builders }: Props) => (
  <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
    {builders.map((item) => (
      <BuilderListCard key={item.id} item={item} />
    ))}
  </div>
);

export default BuilderListView;
