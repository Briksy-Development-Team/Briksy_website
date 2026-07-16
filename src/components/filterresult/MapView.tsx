import type { Property } from "../../types/property";

type Props = {
    properties: Property[];
};

const MapView = ({ properties }: Props) => {
    return (
        <div className="h-[700px] rounded-xl bg-gray-300 flex flex-col items-center justify-center">
            <h2>Google Map</h2>

            {properties.map((property) => (
                <p key={property.id}>{property.title}</p>
            ))}
        </div>
    );
};

export default MapView;