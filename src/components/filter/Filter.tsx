import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalWrapper from "../wrapper/ModalWrapper";

type FilterProp = {
    isOpen: boolean;
    onClose: () => void;
};

const Filter = ({ isOpen, onClose }: FilterProp) => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("Buy");

    const handleSubmit = () => {
        navigate("/search");
        onClose();
    };


    return (
        <ModalWrapper isOpen={isOpen}>
            <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal */}
                <div className="relative flex flex-col w-full max-w-2xl h-[90vh] max-h-[90vh] mx-4 rounded-[24px] bg-white shadow-2xl overflow-hidden">

                    {/* Scrollable content area */}
                    <div
                        className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-8"
                        style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
                        // Add these two event handlers to prevent global scroll hijackers from breaking the modal:
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

                            {/* Status Tabs */}
                            <div className="flex gap-4 mb-8">
                                {["Buy", "Rent", "Sold"].map((tab) => (
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
                                {/* Property Type */}
                                <div>
                                    <h3 className="font-semibold mb-4">Property Type</h3>
                                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                                        {[
                                            "All types", "Retirement Living",
                                            "Houses", "Land",
                                            "Townhouses", "Acreage",
                                            "Apartment & Units", "Rural",
                                            "Villa", "Block Of Units"
                                        ].map((type) => (
                                            <label key={type} className="flex items-center gap-3 cursor-pointer">
                                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#3D2C1D] focus:ring-[#3D2C1D]" />
                                                <span className="text-sm text-gray-600">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <hr className="border-gray-100" />

                                {/* Price */}
                                <div>
                                    <h3 className="font-semibold mb-4">Price</h3>
                                    <div className="flex gap-4 mb-4">
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Min</label>
                                            <select className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]">
                                                <option>Any</option>
                                            </select>
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Max</label>
                                            <select className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]">
                                                <option>Any</option>
                                            </select>
                                        </div>
                                    </div>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#3D2C1D] focus:ring-[#3D2C1D]" />
                                        <span className="text-sm text-gray-600">Only show properties with price</span>
                                    </label>
                                </div>

                                <hr className="border-gray-100" />

                                {/* Bathrooms */}
                                <div>
                                    <h3 className="font-semibold mb-4">Bathrooms</h3>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Min</label>
                                            <select className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]">
                                                <option>Any</option>
                                            </select>
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Max</label>
                                            <select className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]">
                                                <option>Any</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-100" />

                                {/* Car spaces */}
                                <div>
                                    <h3 className="font-semibold mb-4">Car spaces</h3>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-xs text-gray-500 mb-1">Min</label>
                                            <select className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D]">
                                                <option>Any</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-100" />

                                {/* Keywords */}
                                <div>
                                    <h3 className="font-semibold mb-4">Keywords</h3>
                                    <input
                                        type="text"
                                        placeholder="Air con, pool, solar, etc."
                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none focus:border-[#3D2C1D] mb-2"
                                    />
                                    <p className="text-xs text-gray-400">Add specific property features to your search</p>
                                </div>
                            </div>
                        </div>


                        {/* Footer Actions */}
                        <div className="mt-10 flex justify-end gap-4">
                            <button
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
