import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalWrapper from "../wrapper/ModalWrapper";

type FilterProp = {
    isOpen: boolean;
    onClose: () => void;
};

type Status = "Buy" | "Rent" | "Sold";

type StatusConfig = {
    propertyTypes: string[];
    priceLabel: string;
    priceUnit?: string; // e.g. "/week" for rent
    priceCheckboxLabel: string;
};

const STATUS_CONFIG: Record<Status, StatusConfig> = {
    Buy: {
        propertyTypes: [
            "All types", "Retirement Living",
            "Houses", "Land",
            "Townhouses", "Acreage",
            "Apartment & Units", "Rural",
            "Villa", "Block Of Units",
        ],
        priceLabel: "Price",
        priceCheckboxLabel: "Only show properties with price",
    },
    Rent: {
        propertyTypes: [
            "All types", "Houses",
            "Townhouses", "Apartment & Units",
            "Villa", "Studio",
            "Room", "Block Of Units",
            "Retirement Living", "Duplex",
        ],
        priceLabel: "Rent",
        priceUnit: "/week",
        priceCheckboxLabel: "Only show properties with rent price",
    },
    Sold: {
        propertyTypes: [
            "All types", "Retirement Living",
            "Houses", "Land",
            "Townhouses", "Acreage",
            "Apartment & Units", "Rural",
            "Villa", "Block Of Units",
        ],
        priceLabel: "Sold price",
        priceCheckboxLabel: "Only show properties with sold price",
    },
};

const TABS: Status[] = ["Buy", "Rent", "Sold"];

type FieldValue = string | boolean;
type FieldValues = Record<string, FieldValue>;

const Filter = ({ isOpen, onClose }: FilterProp) => {
    const navigate = useNavigate();
    const [status, setStatus] = useState<Status>("Buy");

    const [values, setValues] = useState<FieldValues>({});

    const config = STATUS_CONFIG[status];
    const key = (id: string) => `${status}:${id}`;
    const getValue = (id: string): FieldValue | undefined => values[key(id)];
    const setValue = (id: string, val: FieldValue) =>
        setValues((prev) => ({ ...prev, [key(id)]: val }));
    const getText = (id: string, fallback = ""): string => {
        const v = getValue(id);
        return typeof v === "string" ? v : fallback;
    };
    const getBool = (id: string): boolean => {
        const v = getValue(id);
        return typeof v === "boolean" ? v : false;
    };

    const handleSubmit = () => {
        navigate("/search");
        onClose();
    };

    const handleClear = () => {
        setValues((prev) => {
            const next = { ...prev };
            Object.keys(next)
                .filter((k) => k.startsWith(`${status}:`))
                .forEach((k) => delete next[k]);
            return next;
        });
    };


    return (
        <ModalWrapper isOpen={isOpen}>
            <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={onClose}
                />

                <div className="relative flex flex-col w-full max-w-2xl h-[90vh] max-h-[90vh] mx-4 rounded-[24px] bg-white shadow-2xl overflow-hidden">

                    <div
                        className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-8"
                        style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 left-6 text-gray-500 hover:text-black transition-colors"
                        >
                            <X size={24} strokeWidth={1.5} />
                        </button>

                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-6">Filters</h2>

                            <div className="flex gap-4 mb-8">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setStatus(tab)}
                                        className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${status === tab
                                            ? "bg-[#3D2C1D] text-white border-[#3D2C1D]"
                                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-semibold mb-4">Property Type</h3>
                                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                                        {config.propertyTypes.map((type) => (
                                            <label key={type} className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={getBool(`propertyType:${type}`)}
                                                    onChange={(e) =>
                                                        setValue(`propertyType:${type}`, e.target.checked)
                                                    }
                                                    className="w-4 h-4 rounded border-gray-300 text-[#3D2C1D] focus:ring-[#3D2C1D]"
                                                />
                                                <span className="text-sm text-gray-600">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <hr className="border-gray-100" />

                                <div>
                                    <h3 className="font-semibold mb-4">
                                        {config.priceLabel}
                                        {config.priceUnit && (
                                            <span className="text-gray-400 font-normal"> ({config.priceUnit})</span>
                                        )}
                                    </h3>
                                    <div className="flex gap-4 mb-4">
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Min</label>
                                            <select
                                                value={getText("priceMin", "Any")}
                                                onChange={(e) => setValue("priceMin", e.target.value)}
                                                className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                            >
                                                <option>Any</option>
                                            </select>
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Max</label>
                                            <select
                                                value={getText("priceMax", "Any")}
                                                onChange={(e) => setValue("priceMax", e.target.value)}
                                                className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                            >
                                                <option>Any</option>
                                            </select>
                                        </div>
                                    </div>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={getBool("priceOnly")}
                                            onChange={(e) => setValue("priceOnly", e.target.checked)}
                                            className="w-4 h-4 rounded border-gray-300 text-[#3D2C1D] focus:ring-[#3D2C1D]"
                                        />
                                        <span className="text-sm text-gray-600">{config.priceCheckboxLabel}</span>
                                    </label>
                                </div>

                                <hr className="border-gray-100" />

                                <div>
                                    <h3 className="font-semibold mb-4">Bathrooms</h3>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Min</label>
                                            <select
                                                value={getText("bathroomsMin", "Any")}
                                                onChange={(e) => setValue("bathroomsMin", e.target.value)}
                                                className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                            >
                                                <option>Any</option>
                                            </select>
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Max</label>
                                            <select
                                                value={getText("bathroomsMax", "Any")}
                                                onChange={(e) => setValue("bathroomsMax", e.target.value)}
                                                className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                            >
                                                <option>Any</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-100" />

                                <div>
                                    <h3 className="font-semibold mb-4">Car spaces</h3>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Min</label>
                                            <select
                                                value={getText("carSpacesMin", "Any")}
                                                onChange={(e) => setValue("carSpacesMin", e.target.value)}
                                                className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                            >
                                                <option>Any</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {status === "Rent" && (
                                    <>
                                        <hr className="border-gray-100 mb-8" />
                                        <div>
                                            <h3 className="font-semibold mb-4">Bond</h3>
                                            <div className="flex gap-4">
                                                <div className="flex-1">
                                                    <label className="block text-xs text-gray-500 mb-1">Min</label>
                                                    <select
                                                        value={getText("bondMin", "Any")}
                                                        onChange={(e) => setValue("bondMin", e.target.value)}
                                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                                    >
                                                        <option>Any</option>
                                                    </select>
                                                </div>
                                                <div className="flex-1">
                                                    <label className="block text-xs text-gray-500 mb-1">Max</label>
                                                    <select
                                                        value={getText("bondMax", "Any")}
                                                        onChange={(e) => setValue("bondMax", e.target.value)}
                                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                                    >
                                                        <option>Any</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border-gray-100 mb-8" />
                                        <div>
                                            <h3 className="font-semibold mb-4">Available from</h3>
                                            <div className="flex gap-4">
                                                <div className="flex-1">
                                                    <label className="block text-xs text-gray-500 mb-1">From</label>
                                                    <input
                                                        type="date"
                                                        value={getText("availableFromFrom", "")}
                                                        onChange={(e) => setValue("availableFromFrom", e.target.value)}
                                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <label className="block text-xs text-gray-500 mb-1">To</label>
                                                    <input
                                                        type="date"
                                                        value={getText("availableFromTo", "")}
                                                        onChange={(e) => setValue("availableFromTo", e.target.value)}
                                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border-gray-100 mb-8" />
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={getBool("furnished")}
                                                onChange={(e) => setValue("furnished", e.target.checked)}
                                                className="w-4 h-4 rounded border-gray-300 text-[#3D2C1D] focus:ring-[#3D2C1D]"
                                            />
                                            <span className="text-sm text-gray-600">Furnished only</span>
                                        </label>
                                    </>
                                )}
                                {status === "Sold" && (
                                    <>
                                        <hr className="border-gray-100 mb-8" />
                                        <div>
                                            <h3 className="font-semibold mb-4">Sold date</h3>
                                            <div className="flex gap-4">
                                                <div className="flex-1">
                                                    <label className="block text-xs text-gray-500 mb-1">From</label>
                                                    <input
                                                        type="date"
                                                        value={getText("soldDateFrom", "")}
                                                        onChange={(e) => setValue("soldDateFrom", e.target.value)}
                                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <label className="block text-xs text-gray-500 mb-1">To</label>
                                                    <input
                                                        type="date"
                                                        value={getText("soldDateTo", "")}
                                                        onChange={(e) => setValue("soldDateTo", e.target.value)}
                                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <hr className="border-gray-100" />

                                <div>
                                    <h3 className="font-semibold mb-4">Keywords</h3>
                                    <input
                                        type="text"
                                        placeholder="Air con, pool, solar, etc."
                                        value={getText("keywords", "")}
                                        onChange={(e) => setValue("keywords", e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D] mb-2"
                                    />
                                    <p className="text-xs text-gray-400">Add specific property features to your search</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex justify-end gap-4">
                            <button
                                onClick={handleClear}
                                className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Clear filter
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-2.5 rounded-lg bg-[#3D2C1D] text-sm font-medium text-white hover:bg-[#2c1f14] transition-colors"
                            >
                                Submit Query
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default Filter;