import type { Builder } from "../../../types/builder";
import BuilderGridCard from "./BuilderGridCard";

type Props = {
  builders: Builder[];
};

const BuilderGridView = ({ builders }: Props) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {builders.map((item) => (
      <BuilderGridCard key={item.id} item={item} />
    ))}
  </div>
);

export default BuilderGridView;
