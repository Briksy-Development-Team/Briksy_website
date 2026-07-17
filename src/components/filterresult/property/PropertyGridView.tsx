import type { Property } from "../../../types/property";
import PropertyGridCard from "./PropertyGridCard";

type Props = {
  properties: Property[];
};

const PropertyGridView = ({ properties }: Props) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {properties.map((item) => (
      <PropertyGridCard key={item.id} item={item} />
    ))}
  </div>
);

export default PropertyGridView;
