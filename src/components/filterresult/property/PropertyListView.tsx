import type { Property } from "../../../types/property";
import PropertyListCard from "./PropertyListCard";

type Props = {
  properties: Property[];
};

const PropertyListView = ({ properties }: Props) => (
  <div className="grid grid-cols-1 gap-x-10 gap-y-8 xl:grid-cols-3">
    {properties.map((item) => (
      <PropertyListCard key={item.id} item={item} />
    ))}
  </div>
);

export default PropertyListView;
